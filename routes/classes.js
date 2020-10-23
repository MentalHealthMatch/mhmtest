const express = require('express');
const router = express.Router();
const database = require("../db/database-access");

router.get('/', getClasses);
router.get('/:id', getClass);
router.post('/', createClass);
router.put('/:id', updateClass);
router.delete('/:id', destroyClass);

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

async function updateClass(req, res) {
  let updatedClass = await database.updateClass({ ...req.params, ...req.body });
  res.json(updatedClass);
}

async function destroyClass(req, res) {
  let classes = await database.destroyClass(parseInt(req.params.id));
  res.json(classes);
}

module.exports = router;
