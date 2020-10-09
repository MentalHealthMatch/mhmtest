// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function getUsers() {
  await whatIsThisDoing(200);
  return [
    { name: "Jerry", last: "Smitth", id: 1 },
    { name: "Billy", last: "Jones", id: 2 },
  ];
}

function whatIsThisDoing(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

async function getAllClasses() {
  await whatIsThisDoing(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getAllClasses };
