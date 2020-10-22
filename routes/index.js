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

async function processAllUsers(req, res) {
  const firstNames = await database.getFirstNames();
  const lastNames = await database.getLastNames();

  const users = firstNames.map(firstName => {
    return {
      id: firstName.id,
      name: firstName.name,
      last: lastNames.find(lastName => lastName.id === firstName.id).last
    }
  })

  res.json(users);
}

async function processAllClasses(req, res) {
  res.json(await databaseAccess.getAllClasses());
}
