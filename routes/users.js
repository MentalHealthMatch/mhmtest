var express = require('express');
var router = express.Router();
const databaseAccess = require("./databaseAccess");

//router.get("/listAllUsers", processAllUsers);  // dont need this Note - while creating Users api by default /users will return list of users 

/* GET users listing. */
router.get('/', processAllUsers);               

function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    returnValue[array[i].id] = array[i].last;
  }
  return returnValue;
}

// removed unnecessory varibles which will be using space
async function processAllUsers(req, res) {
  let stuff = await databaseAccess.getUsers();          
  let lastNames = await databaseAccess.getLastNames();
  const lastNameLookup = createLastNameLookup(lastNames);
  for (let i = 0; i < stuff.length; i++) {
    stuff[i].last = lastNameLookup[stuff[i].id];;
  }
  res.json(stuff);
}

module.exports = router;
