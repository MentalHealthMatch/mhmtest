const express = require("express");
const router = express.Router();

// @route GET
// @desc render home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

module.exports = router;
