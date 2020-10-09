var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/users", listAllUsers);

router.get("/classes", listallclasses);

module.exports = router;

async function listAllUsers(req, res) {
  let users = await database.getUsers();
  res.json(users);
}

async function listallclasses(req, res) {
  const allClasses = await databaseAccess.getAllClasses();
  res.json(allClasses);
}
