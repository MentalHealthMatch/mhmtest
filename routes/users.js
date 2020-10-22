var express = require('express');
var router = express.Router();
const database = require("../db/databaseAccess");

/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getUser);

async function getUsers(req, res) {
  let users = await database.getUsers();
  res.json(users);
}

async function getUser(req, res) {
  let user = await database.getUser(parseInt(req.params.id));
  res.json(user);
}

module.exports = router;
