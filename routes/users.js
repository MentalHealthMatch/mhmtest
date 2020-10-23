var express = require('express');
var router = express.Router();
const database = require("../db/database-access");

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', destroyUser);

async function getUsers(req, res) {
  let users = await database.getUsers();
  res.json(users);
}

async function getUser(req, res) {
  let user = await database.getUser(parseInt(req.params.id));
  res.json(user);
}

async function createUser(req, res) {
  let newUser = await database.createClass(req.body);
  res.json(newUser);
}

async function updateUser(req, res) {
  let user = await database.updateUser({ ...req.params, ...req.body });
  res.json(user);
}

async function destroyUser(req, res) {
  let users = await database.destroyUser(parseInt(req.params.id));
  res.json(users);
}

module.exports = router;
