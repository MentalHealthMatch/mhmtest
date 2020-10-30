var express = require("express");
const databaseAccess = require("./databaseAccess");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});



//routes for users
router.get("/listAllUsers", processAllUsers);
//routes for classes
router.get("/listallclasses", listallclasses);


//last name lookup function
//removed excess variables
function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    returnValue[array[i].id] = array[i].last;
  }
  return returnValue;
}


//removed excesss variables and code
async function processAllUsers(req, res) {
  let stuff = await database.getUsers();
  let lastNames = await database.getLastNames();
  const lastNameLookup = createLastNameLookup(lastNames);
  for (let i = 0; i < stuff.length; i++) {
   stuff[i].last = lastNameLookup[stuff[i].id];
  }
  res.json(stuff);
}



//function was missing the await keyword
async function listallclasses(req, res) {
  res.json( await databaseAccess.getAllClasses());
}


module.exports = router;
