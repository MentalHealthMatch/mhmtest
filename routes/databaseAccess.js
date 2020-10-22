// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function getFirstNames() {
  await setPromiseTimeout(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

async function getLastNames() {
  await setPromiseTimeout(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
}

function setPromiseTimeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function getAllClasses() {
  await setPromiseTimeout(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getFirstNames, getLastNames, getAllClasses };
