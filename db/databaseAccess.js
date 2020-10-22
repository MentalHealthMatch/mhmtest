// This is a dummy database access file.
"use strict";

//Both first and last names should be retrievable from any reasonable database in one query

async function getUsers() {
  await latency(200);
  return [
    { id: 1, name: "Jerry", last: "Smith" },
    { id: 1, name: "Billy", last: "Jones" },
  ];
}

async function getClasses() {
  await latency(200);
  return [
    { id: 1, name: "Trigonometry" },
    { id: 2, name: "Calculus" },
  ];
}


function latency(ms) {
  return new Promise((delayedAction) => setTimeout(delayedAction, ms));
}

module.exports = { getUsers, getClasses };
