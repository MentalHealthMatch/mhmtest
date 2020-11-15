var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/listAllUsers", processAllUsers);

router.get("/listallclasses", listallclasses);

module.exports = router;

async function processAllUsers(req, res) {
  const users = await databaseAccess.getUsers();
  const lastNames = await databaseAccess.getLastNames();
  const stuff = users.map((user) => ({
    ...user,
    last: lastNames.find((lastNameObject) => lastNameObject.id === user.id).last,
  }));
  res.json(stuff);
}

async function listallclasses(req, res) {
  const classes = await databaseAccess.getAllClasses();
  res.json(classes);
}
