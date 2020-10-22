var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/listAllUsers", processAllUsers);

router.get("/listallclasses", listallclasses);

module.exports = router;

async function processAllUsers(req, res) {
  let users = await database.getUsers();
  res.json(users);
}

async function listallclasses(req, res) {
  let classes = await database.getClasses();
  res.json(classes);
}
