
var express = require ("express");
var router = express.Router ();

var database = require ("DB");

router.get ("/list", async function (req, res) {
  res.json (database.getAllClasses());
});

module.exports = router;
