const router = require("express").Router();

const chartRoutes = require("./charts");
const discRoutes = require("./discs");
const recordRoutes = require("./records");
const tapeRoutes = require("./tapes");

router.use("/api/charts", chartRoutes);
router.use("/api/discs", discRoutes);
router.use("/api/records", recordRoutes);
router.use("/api/tapes", tapeRoutes);

module.exports = router;