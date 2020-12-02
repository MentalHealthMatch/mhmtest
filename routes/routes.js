const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const classRoutes = require("./classRoutes");
const defaultRoute = require("./defaultRoute");

//split main router into 3 parts with different endpoints
router.use("/", defaultRoute);
router.use("/users", userRoutes);
router.use("/classes", classRoutes);

module.exports = router;
