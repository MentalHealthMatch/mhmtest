// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

// NOTE: I haven't updated this file except changing the file name and the method names because as per my understanding
// this is only mocking DB access and is not something which our application will have a lot of control over (when a real DB is used)

async function getAllUsers() {
  await fakeDelay(200);
  return [
    { name: "Jerry", id: 1 },
    { name: "Billy", id: 2 },
  ];
}

async function getUserLastNames() {
  await fakeDelay(10);
  return [
    { id: 1, last: "Smitth" },
    { id: 2, last: "Jones" },
  ];
}

function fakeDelay(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}

async function getAllClasses() {
  await fakeDelay(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getAllUsers, getUserLastNames, getAllClasses };
