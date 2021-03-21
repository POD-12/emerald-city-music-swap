const validatorFactory = require("./validatorFactory");

const registerValidator = validatorFactory({
  name:{type:"string", empty:false},
  email: { type: "email" },
  password: { type: "string", empty: false }
  
});

module.exports = registerValidator;
