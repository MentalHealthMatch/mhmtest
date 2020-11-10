var express = require("express");
var router = express.Router();
const databaseAccess = require("./databaseAccess");
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

module.exports = router;
