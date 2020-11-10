var createError = require('http-errors')
const utils = require("../utils/commonUtils");

// Returns the all the users including their lastnames
const processAllUsers = async function(req, res, next) {
  const allUsers = await utils.getUsersData();
  res.json(allUsers);
}

// Returns the User based on their id
const getUserById = async function(req, res, next) {
  const allUsers = await utils.getUsersData();
  const matchingUser = allUsers.filter(x => x.id == req.params.id);
  // If no match is found
  if (matchingUser.length == 0) {
    res.status(404).send("User id not found");
  } else {
    res.json(matchingUser);
  }
}

module.exports.processAllUsers = processAllUsers;
module.exports.getUserById = getUserById;
