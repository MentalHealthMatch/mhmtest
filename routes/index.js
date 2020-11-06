var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getAllUsers", getAllUsers);

router.get("/getAllClasses", listallclasses);

module.exports = router;

async function getAllUsers(req, res) {
  let users = await database.getUsers();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    let lastNames = await database.getLastNames();
    const lastNameLookup = createLastNameLookup(lastNames);
    const nextId = next.id;
    const last = lastNameLookup[nextId];
    next.last = last;
  }
  res.json(users);
}

function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    const next = array[i];
    returnValue[next.id] = next.last;
  }
  return returnValue;
}

async function getAllClasses(req, res) {
  res.json(databaseAccess.getAllClasses());
}
