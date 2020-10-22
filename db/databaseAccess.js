// This is a dummy database access file.
"use strict";

const data = require('./mockData');

async function getUsers() {
  await latency(200);
  return data.users;
}

async function getClasses() {
  await latency(200);
  return data.classes;
}

//This helps sell the illusion of a real database
function latency(ms) {
  return new Promise((delayedAction) => setTimeout(delayedAction, ms));
}

module.exports = { getUsers, getClasses };
