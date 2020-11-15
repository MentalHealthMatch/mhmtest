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
  let stuff = await databaseAccess.getUsers();
  for (let i = 0; i < stuff.length; i++) {
    const next = stuff[i];
    let lastNames = await databaseAccess.getLastNames();
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

async function listallclasses(req, res) {
  const classes = await databaseAccess.getAllClasses();
  res.json(classes);
}
