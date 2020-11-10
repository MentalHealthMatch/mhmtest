// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function getUsers() {
  await timeOut(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 }
  ];
}

async function getLastNames() {
  await timeOut(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" }
  ];
}

function timeOut(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

async function getAllClasses() {
  await timeOut(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getLastNames, getAllClasses };
