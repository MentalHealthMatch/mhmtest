// This is a dummy database access file.
"use strict";

const data = require('./mockData');

async function getUsers() {
  await latency(200);
  return data.users;
}

async function getUser(id) {
  let users = data.users;
  for (const user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return undefined;
}

async function getClasses() {
  await latency(200);
  return data.classes;
}

async function getClass(id) {
  let classes = data.classes;
  for (const thisClass of classes) {
    if (thisClass.id === id) {
      return thisClass;
    }
  }
  return undefined;
}

//This helps sell the illusion of a real database
function latency(ms) {
  return new Promise((delayedAction) => setTimeout(delayedAction, ms));
}

module.exports = { getUsers, getUser, getClasses, getClass };
