const { getLastNames, getFirstNames } = require('../db');

/**
 * @returns {Array} list of all users, including first and last names
 */
async function getAllUsers() {
    const users = await getFirstNames();
    for(let i = 0; i < users.length; i++) {
      const user = users[i];
      user.lastName = await getLastName(user.id);
    }
    
    return users;
}

/**
 * 
 * @param {number} id - the id of a user to find
 * @returns {(Object|null)} - an object with a single user's id, first, and last name
 *                            or null if user not found
 */
async function getUserById(id) {
    const users = await getFirstNames();
    const user = users.filter(user => user.id === id)[0];

    if(!user) {
        return null;
    }

    user.lastName = await getLastName(id);

    return user;
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

  module.exports = {
      getAllUsers,
      getUserById
  }