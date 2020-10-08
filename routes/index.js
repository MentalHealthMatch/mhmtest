var express = require("express");
var router = express.Router();
var database = require("./databaseAccess");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/users", processAllUsers);
router.get("/classes", getClasses);

module.exports = router;

async function processAllUsers(req, res, next) {
  database.getUsers().then(users => {
      res.json({users: users})
  }).catch(err => {
      next(err);
  })
}

async function getClasses(req, res, next) {
  database.getClassesFromDatabase().then(classes => {
    res.json({classes: classes})
  }).catch(err => {
     next(err);
  });
}
