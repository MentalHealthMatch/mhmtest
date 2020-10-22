var express = require('express');
var router = express.Router();
const database = require("../db/database-access");

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);

async function getUsers(req, res) {
  let users = await database.getUsers();
  res.json(users);
}

async function getUser(req, res) {
  let user = await database.getUser(parseInt(req.params.id));
  res.json(user);
}

async function createUser(req, res) {
  let newUser = await database.createClass(req.params);
  res.json(newUser);
}

module.exports = router;
