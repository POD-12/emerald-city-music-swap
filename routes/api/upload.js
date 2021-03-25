const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");
const multer = require("multer");
const path = require("path");
const db = require("../../models");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
//   const authenticateUser = require("../middleware/authenticateUser");

router.post("/", upload.single("avatar"), function (req, res) {
  console.log(req.file);

  req.body.image = req.file.originalname;

  console.log(req.body);
  db.Record.create(req.body).then(function (result) {
    res.redirect("/userPage");
  });
});

module.exports = router;

