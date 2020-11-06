// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

/**
 * @returns {Array} - an array of objects containing the firstName and id for all 
 *                    users
 */
async function getFirstNames() {
  await makeAsync(200);
  return [
    { id: 1, firstName: "Jerry" },
    { id: 2, firstName: "Billy" },
  ];
}

/**
 * @returns {Array} - an array of objects containing the lastName and id for all
 *                    users
 */
async function getLastNames() {
  await makeAsync(10);
  return [
    { id: 1, lastName: "Smitth" },
    { id: 2, lastName: "Jones" },
  ];
}

/**
 * @returns {Array} - an array of objects containing the name and id of all classes
 */
async function getAllClasses() {
  await makeAsync(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

/**
 * Method to mimic an asyn network call
 * @param {number} ms - a time in milliseconds
 * @returns {Promise} - returns a promise that resolves in [ms] time
 */
function makeAsync(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

module.exports = { 
  getFirstNames, 
  getLastNames, 
  getAllClasses 
};
