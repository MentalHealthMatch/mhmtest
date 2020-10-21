var express = require("express");
const database = require("../data/databaseAccess");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET users. */
router.get("/users", processAllUsers);
/* GET classes. */
router.get("/classes", processAllClasses);

module.exports = router;

async function processAllUsers(req, res) {
  try {
    let firstNames = await database.getFirstNames();
    let lastNames = await database.getLastNames();
    let users = [];

    for(let i = 0; i < firstNames.length; i++) {
      users.push({
      ...firstNames[i],
      ...(lastNames.find((person) => person.id === firstNames[i].id))}
      );
    }
    res.json(users);

  } catch (error) {
    console.log(error);
  }
}

async function processAllClasses(req, res) {
  try {
    let classes = await database.getAllClasses();
    res.json(classes);
  } catch (error) {
    console.log(error);
  }
}
