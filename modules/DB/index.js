// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function getUsers() {
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

async function getLastNames() {
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
}

async function getAllClasses() {
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getLastNames, getAllClasses };
