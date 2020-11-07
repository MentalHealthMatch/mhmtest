/**
 * NOTE:
 * Following are a few other things that could be done, but weren't pursued to contain the scope of the assignment
 * - could potentially create models based on entities
 * - could even try to update structure of user's data to make fetching easier (but for this exercise I feel that the problem
 *   is to fix what's wrong with the code and not with the structure of data or how data's being accessed)
 * - error handling and input validation could be added
 */

const createError = require('http-errors');

const db = require('../services/db');

const createLastNameLookup = function (lastNamesList) {
    const lookup = {};
    for (let entry of lastNamesList) {
        lookup[entry.id] = entry.last;
    }

    return lookup;
};

const fetchAllUsers = async function () {
    const users = await db.getAllUsers();
    const lastNames = await db.getUserLastNames(); // In a (relational) DB, fetching from 2 tables would probably be done using JOIN
    const lastNamesLookup = createLastNameLookup(lastNames);

    users.forEach(user => user.last = lastNamesLookup[user.id]);
    return users;
};

const getAllUsers = async function (req, res) {
    const users = await fetchAllUsers();
    res.json(users);
};

const getUser = async function (req, res) {
    const userId = req.params.id;
    const allUsers = await fetchAllUsers();
    const user = allUsers.find(entry => entry.id == userId); // while using a DB, this won't be required because we could fetch by ID; thus, no effort was invested in trying to optimize this

    if (!user) {
        res.status(404);
        res.send(createError.NotFound());
        return;
    }

    res.json(user);
};

// const addUser = async function (req, res) {};
// const updateUser = async function (req, res) {};
// const deleteUser = async function (req, res) {};

module.exports = {
    getAllUsers,
    getUser,
    // addUser,
    // updateUser,
    // deleteUser
};
