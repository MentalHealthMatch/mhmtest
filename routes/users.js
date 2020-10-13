//var express = require('express');
//var router = express.Router();
const databaseAccess = require("./databaseAccess");

//router.get("/listAllUsers", processAllUsers);  // dont need this Note - while creating Users api by default /users will return list of users 

/* GET users listing. */
//router.get('/', processAllUsers);               

function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    returnValue[array[i].id] = array[i].last;
  }
  return returnValue;
}

// removed unnecessory varibles and reduced space complexity 
async function getUsers(req, res) {
  let stuff = await databaseAccess.getUsers();          
  let lastNames = await databaseAccess.getLastNames();                    //  took this out of loop and now it will work as a dictionary and can be loaded only once per request which will also reduce time complexity and space complexity of the code 
  const lastNameLookup = createLastNameLookup(lastNames);                     
  for (let i = 0; i < stuff.length; i++) {
    stuff[i].last = lastNameLookup[stuff[i].id];;
  }
  res.json(stuff);
}

// create user api
function createUsers(req, res) {
  res.json({"message":"Here we can declare create user"});
}


//module.exports = router;
module.exports = { getUsers , createUsers };
