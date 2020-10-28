
var express = require('express');
var router = express.Router();

var database = require ("DB");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function createLastNameLookup(array) {
  const returnValue = {};
  for (let i = 0; i < array.length; i++) {
    const next = array[i];
    returnValue[next.id] = next.last;
  }
  return returnValue;
}
router.get("/list", async function (req, res) {
  let stuff = await database.getUsers();

  for (let i = 0; i < stuff.length; i++) {
    const next = stuff[i];
    let lastNames = await database.getLastNames();
    const lastNameLookup = createLastNameLookup(lastNames);
    const nextId = next.id;
    const last = lastNameLookup[nextId];
    next.last = last;
  }

  res.json(stuff);
});

module.exports = router;
