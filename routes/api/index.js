const router = require("express").Router();

// const chartRoutes = require("./charts");
// const discRoutes = require("./discs");
const recordRoutes = require("./records");
const uploadRoutes = require ("./upload");
// const tapeRoutes = require("./tapes");
const authRoutes = require("./authentication");

// router.use("/charts", chartRoutes);
// router.use("/discs", discRoutes);
router.use("/records", recordRoutes);
// router.use("/tapes", tapeRoutes);
router.use("/auth", authRoutes)
router.use("/recordImage", uploadRoutes);

module.exports = router;

