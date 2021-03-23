// Stuff
const router = require("express").router();
const recordsController = require("../../controllers/recordsController");

router.route("/api/records")
    .get(recordsController.findAll)
    .post(recordsController.create)

