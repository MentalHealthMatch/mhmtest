var express = require('express');
var router = express.Router();
const database = require("../db/databaseAccess");

router.get('/', getClasses);
router.get('/:id', getClass);

async function getClasses(req, res) {
  let classes = await database.getClasses();
  res.json(classes);
}

async function getClass(req, res) {
  let thisClass = await database.getClass(parseInt(req.params.id));
  res.json(thisClass);
}

module.exports = router;
