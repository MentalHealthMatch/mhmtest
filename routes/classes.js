var express = require("express");
var router = express.Router();
const classService = require("../services/classServices");

//File contains all the routes related to Class

// This route get the list of all Classes
router.get("/listAllClasses", classService.listAllClasses);

//This route get the class based on the id
router.get("/getClass/:id", classService.getClassById);

module.exports = router;
