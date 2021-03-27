const router = require("express").Router();
const db = require("../../models");
const recordController = require("../../controllers/recordsController");

router.route("/")
    .get(recordController.findAll)
    .post(recordController.create);

router.route("/:recordGenre")
    .get(recordController.findbyGenre);

router.route("/:id")
    .put(recordController.findbyGenre)
    .delete(recordController.remove);

module.exports = router;