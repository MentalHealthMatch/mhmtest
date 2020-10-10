// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function getUsers() {
  await whatIsThisDoing(100);
  return [
    { name: "Jerry", lastname: "Smith", id: 1 },
    { name: "Billy", lastname: "Jones",  id: 2 },
  ];
}


function whatIsThisDoing(ms) {
  return new Promise((doSomething) => setTimeout(doSomething, ms));
}
//this delays by "ms" the execution of the async functions from where is being used.




async function getAllClasses() {
  await whatIsThisDoing(200);
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getAllClasses };
