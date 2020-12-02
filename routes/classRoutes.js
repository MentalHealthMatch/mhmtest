const express = require("express");
const router = express.Router();

const { getClasses } = require("../controllers/classController");

// @route GET
// @desc get all classes
// @access public
router.get("/", getClasses);

module.exports = router;
