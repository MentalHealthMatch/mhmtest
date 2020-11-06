var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getAllClasses", getAllClasses);

module.exports = router;


async function getAllClasses(req, res) {
  res.json(databaseAccess.getAllClasses());
}
