const express = require("express");
const router = express.Router();
const database = require("../db/databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/listallclasses", listallclasses);

module.exports = router;

async function listallclasses(req, res) {
  let classes = await database.getClasses();
  res.json(classes);
}
