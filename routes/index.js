var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//// For getting all user from database
router.get("/listAllUsers", listAllUsers);
/// For getting all classes from database
router.get("/listAllClasses", listAllClasses);
// Get user for given id
router.get("/getUser", getUser);
// Get class for given id
router.get("/getClass", getClass);

module.exports = router;

////////////////////////////////////////////////////////////////
///Function return json format out containing
/// name: {firstname}
/// last: {lastName}
/// id: {userId}
////////////////////////////////////////////////////////////////
async function listAllUsers(req, res) {
  let users = await database.getUsers();
  let lastNames = await database.getLastNames();
  const lastNameLookup = createLastNameLookup(lastNames);

  for (let i = 0; i < users.length; i++) {
    users[i].last = lastNameLookup[users[i].id];
  }
  res.json(users);
}
//////////////////////////////////////////////////////////////
/// Function return a map, each item contain
/// userId, lastName
//////////////////////////////////////////////////////////////
function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    const next = array[i];
    returnValue[next.id] = next.last;
  }
  return returnValue;
}

//////////////////////////////////////////////////////////////
/// Function return json containing all classes from database
//////////////////////////////////////////////////////////////
async function listAllClasses(req, res) {
  let classes = await databaseAccess.getAllClasses();
  res.json(classes);
}

//////////////////////////////////////////////////////////////
// function for getting single user
//////////////////////////////////////////////////////////////
async function getUser(req, res) {
  console.log(req.query.userid);
  if (req.query.userid == undefined) {
    res.send("error: user id not found");
    return;
  }

  let users = await database.getUsers();
  let lastNames = await database.getLastNames();
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (req.query.userid == users[i].id) {
      let user = users[i];

      for (let j = 0; j < lastNames.length; j++) {
        if (lastNames[j].id == users[i].id) {
          user.last = lastNames[j].last;
          console.log("user=" + user);
          res.json(user);
          found = true;
          break;
        }
      }
    }
  }

  if (found == false)
    res.send("error: User of id " + req.query.userid + " not found ");
}

//////////////////////////////////////////////////////////////
/// Function return class of given id
//////////////////////////////////////////////////////////////
async function getClass(req, res) {
  console.log(req.query.classid);
  if (req.query.classid == undefined) {
    res.send("error: class id not found");
    return;
  }

  let classes = await databaseAccess.getAllClasses();
  let found = false;

  for (let i = 0; i < classes.length; i++) {
    if (req.query.classid == classes[i].id) {
      res.json(classes[i]);
      found = true;
      break;
    }
  }

  if (found == false)
    res.send("error: Class of id " + req.query.classid + " not found ");
}
