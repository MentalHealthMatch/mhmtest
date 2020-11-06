const express = require("express");
const databaseAccess = require("../db");
const router = express.Router();
const database = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

