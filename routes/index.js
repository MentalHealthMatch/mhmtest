var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/v1/users", processAllUsers);

router.get("/api/v1/classes", processAllClasses);

module.exports = router;



async function processAllClasses(req, res) {
  res.json(await databaseAccess.getAllClasses());
}
