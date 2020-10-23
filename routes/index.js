const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Zephyr Dear's mhmtest solution" });
});

module.exports = router;
