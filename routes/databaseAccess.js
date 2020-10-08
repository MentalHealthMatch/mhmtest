// This is a dummy database access file.
"use strict";

//NOTE:  Please leave these methods async.

async function concatNames(firstNames, lastNames) {
  let nameArray = [];

  firstNames.forEach(n => {
    let fullName = n.name;
    let lName = lastNames.find(lName => lName.id == n.id);
    if(lName != undefined && lName.last) {
      fullName.concat(' ', lName.last)
    }
    listOfNames.push(fullName)
  })

  return nameArray;
}

async function getFirstNames() {
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

async function getUsers() {
  const firstNames = await getFirstNames();
  const lastNames = await getLastNames()
  return await concatNames(firstNames, lastNames);
}

async function getClassesFromDatabase() {
  return [
    { name: "Trig", id: 1 },
    { name: "Calc", id: 2 },
  ];
}

module.exports = { getUsers, getLastNames, getClassesFromDatabase };
