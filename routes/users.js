var express = require('express');
const { getLastNames, getUsers } = require('./databaseAccess');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();

  res.status(200).json(users);
});

/**
 * @returns {array} list of all users, including first and last names
 */
async function getAllUsers() {
  let users = await getUsers();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.lastName = await getLastName(user.id);
  }
  
  return users;
}

/**
 * 
 * @param {number} id - id of user whose last name we need to find
 * @returns {string} - last name of user
 */
async function getLastName(id) {
  const lastNames = await getLastNames();
  const lastNameRecord = lastNames.filter(record => record.id === id)[0];

  return lastNameRecord.lastName;
}

module.exports = router;
