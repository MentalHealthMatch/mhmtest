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
  let stuff = await database.getUsers();
  for (let i = 0; i < stuff.length; i++) {
    const next = stuff[i];
    let lastNames = await database.getLastNames();
    const lastNameLookup = createLastNameLookup(lastNames);
    const nextId = next.id;
    const last = lastNameLookup[nextId];
    next.last = last;
  }
  res.json(stuff);
}

function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    const next = array[i];
    returnValue[next.id] = next.last;
  }
  return returnValue;
}

async function processAllClasses(req, res) {
  res.json(await databaseAccess.getAllClasses());
}
