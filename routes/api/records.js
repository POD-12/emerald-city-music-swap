const router = require("express").Router();
const db = require("../../models");
// const authenticate = require("../authentication");
const recordController = require("../../controllers/recordsController");

router.route("/")
    .get(recordController.findAll)
    .post(recordController.create);

// router.post("/", authenticate, (req, res) => {
//     recordController.create;
// });

router.route("/:recordGenre")
    .get(recordController.findbyGenre);


router.route("/:id")
    .put(recordController.findbyGenre)
    .delete(recordController.remove);
    
// router.put("/:id", authenticate, (req, res) => {
//     recordController.update;
// });

// router.delete("/:id/delete")
//     .delete(recordController.remove);
//     if (err) throw (err);
// });

module.exports = router;