const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const classRoutes = require("./classRoutes");

router.use("/users", userRoutes);
router.use("/classes", classRoutes);

module.exports = router;
