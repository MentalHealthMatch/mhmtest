// Despite everything, this is still a dummy database access file.

"use strict";

// I considered just implementing a simple Elasticsearch cluster or SQLite database,
// but decided it wasn't worth adding dependencies that couldn't be managed by npm.

// CRUD operations are important, though, so we're going to use the fs module
// to somewhat awkwardly mimic what a real database could accomplish trivially.

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const fileLocation = (__dirname + '/mockData.json');

async function getUsers() {
  let data = JSON.parse(await readFile(fileLocation));
  await latency(20);
  return data.users;
}

async function getUser(id) {
  let data = JSON.parse(await readFile(fileLocation));
  let users = data.users;
  for (const user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return undefined;
}

async function createUser(params) {
  let data = JSON.parse(await readFile(fileLocation));
  let users = data.users;
  let newUser = params;
  newUser.id = lastId(users) + 1;
  data.users.push(newUser);
  await fs.writeFileSync(fileLocation, JSON.stringify(data));
}

async function getClasses() {
  let data = JSON.parse(await readFile(fileLocation));
  await latency(20);
  return data.classes;
}

async function getClass(id) {
  let data = JSON.parse(await readFile(fileLocation));
  let classes = data.classes;
  for (const thisClass of classes) {
    if (thisClass.id === id) {
      return thisClass;
    }
  }
  return undefined;
}

async function createClass(params) {
  let data = JSON.parse(await readFile(fileLocation));
  let classes = data.classes;
  let newClass = params;
  newClass.id = lastId(classes) + 1;
  data.classes.push(newClass);
  await writeFile(fileLocation, JSON.stringify(data));
}


//A real database would auto-increment its primary key
function lastId(table) {
  let last = 0;
  for (var record of table) {
    if (record.id > last) {
      last = record.id;
    }
  }
  return last;
}

//This helps sell the illusion of a real database
function latency(ms) {
  return new Promise((delayedAction) => setTimeout(delayedAction, ms));
}

module.exports = { getUsers, getUser, createUser, getClasses, getClass };
