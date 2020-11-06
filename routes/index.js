const express = require("express");
const databaseAccess = require("./databaseAccess");
const router = express.Router();
const database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

