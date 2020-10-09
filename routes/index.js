var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

//middleware
router.use('/users', processAllUsers)
router.use("/classes", listAllClasses);


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/listAllUsers", processAllUsers);

router.get("/listAllClasses", listAllClasses);

module.exports = router;

async function processAllUsers(req, res, next) {
  let users = await database.getUsers();
  let len = users.length;
  for (let i = 0; i < len; i++) {
    const next = users[i];
    let lastNames = await database.getLastNames();
    const lastNameLookup = createLastNameLookup(lastNames);
    const nextId = next.id;
    const last = lastNameLookup[nextId];
    next.last = last;
  }
  req.val = users;
  next();
}

function createLastNameLookup(array) {
  const returnValue = {};
  let len = array.length;
  for (let i = 0; i < len; i++) {
    const next = array[i];
    returnValue[next.id] = next.last;
  }
  return returnValue;
}

async function listAllClasses(req, res, next) {
  let classes = await database.getAllClasses();
  req.val = classes;
  next();
  // res.json(classes);
}
