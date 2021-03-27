const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require("util");

const passwordHash = require("../../config/passwordHash")
//get middleware
const authenticateUser = require("../middleware/authenticateUser");
const validateBodyWith = require("../middleware/validateUserWith");

//data validators
const { loginValidator, registerValidator } = require("../validation");
//load User model
const { User } = require("../../models");

const jwtSign = util.promisify( jwt.sign );

//get currently validated user
router.post("/authenticated", authenticateUser, (req,res)=>{
  // console.log(req.user);
  res.json(req.user);
});

 //log in an existent user by signing and returning a secure json web token
 // for the client application to store and include with requests

router.post("/login", validateBodyWith(loginValidator), async(req,res)=>{
 
  const {email,password} = req.body;
  console.log(req.body);

  try{
    const user = 
      await User
      .findOne({email})
      .populate('records');
    if(!user){
      //user not found by email
      return res.status(404).json({default:"your email or password is invalid"})
    }
  
    const {
      password: encryptedPassword,
      // User object without the password
      ...secureUser
    } = user._doc;
    console.log("user----:",secureUser)

    const isMatch = await bcrypt.compare( password, encryptedPassword );
    
    if( !isMatch ) {
      // User's password is invalid.
      return res.status(404).json({ default: "Email or password is invalid." });
    }

    const payload = {
      id:secureUser._id,
      email:secureUser.email
    };
    console.log(payload);
    //create a signed web token to send back to the client for reauthentication
    const token =  await jwtSign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn:31556926 //one year in seconds
      }
    );

    return res.json({
      sucess:true,
      token: "Bearer " + token,
      user:secureUser
    })
  }catch(err){

    console.log(err);
    res.status(500).json({default:"something went wrong trying to log in "})
  }

});

// creates a new user for authentication 

router.post("/register", validateBodyWith(registerValidator), async(req,res)=>{
  console.log(req.body)
  try{
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      // User already exists error.
      return res.status(400).json({ email: "Email already exists." });
    }

    const newUser = new User({
      name,
      email,
      password: await passwordHash( password )
    });

    await newUser.save();

    const {
      password: encryptedPassword,
      // User object without the password
      ...secureUser
    } = newUser._doc;

    res.json( secureUser );

  }catch(err){
    console.log(err);
    res.status(500).json({ default: "Something went wrong creating your account." });

  }

});
module.exports = router;  