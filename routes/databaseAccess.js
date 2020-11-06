// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

// returns the first name and id of all users
async function getUsers() {
  await makeSync(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

// returns the last name and id of all users
async function getLastNames() {
  await makeAsync(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
}

// Accepts a time [ms] in milliseconds and returns a promise that will
// resolve after [ms] time passes. Mimics an async call, such as too a 
// network
function makeAsync(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

// returns the the name and id of all classes
async function getAllClasses() {
  await makeAsync(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getLastNames, getAllClasses };
