// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

function timeout(ms) {
  return new Promise((callback) => setTimeout(callback, ms));
}

async function getFirstNames() {
  await timeout(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

async function getLastNames() {
  await timeout(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
}

async function getAllClasses() {
  await timeout(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getFirstNames, getLastNames, getAllClasses };
