var express = require('express');
var router = express.Router();
const database = require("../db/database-access");

router.get('/', getClasses);
router.get('/:id', getClass);
router.post('/', createClass);

async function getClasses(req, res) {
  let classes = await database.getClasses();
  res.json(classes);
}

async function getClass(req, res) {
  let thisClass = await database.getClass(parseInt(req.params.id));
  res.json(thisClass);
}

async function createClass(req, res) {
  let newClass = await database.createClass(req.params);
  res.json(newClass);
}

module.exports = router;
