const express = require("express");
const databaseAccess = require("../db");
const router = express.Router();
const database = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  try {
    res.render("index", { title: "Express" });
  } catch(error) {
    res.status(500).json({error});
  } 
});

module.exports = router;

