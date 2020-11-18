const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const classes = require("../controllers/classes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/userlist", users.fetchAllUsers);

router.get("/classlist", classes.fetchAllClasses);

module.exports = router;