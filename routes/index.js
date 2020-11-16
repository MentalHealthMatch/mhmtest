const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const classRoute = require("./class.route");

router.use("/user", userRoute);
router.use("/class", classRoute);

module.exports = router;
