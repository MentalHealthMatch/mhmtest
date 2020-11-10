var express = require('express');
var router = express.Router();
const userService = require("../services/userServices");

/* File contains all the routes related to Users */

// This route get the list of all Users incluing the name and the lastname
router.get("/listAllUsers", userService.processAllUsers);

// This route get the User based on their id
router.get("/getUser/:id", userService.getUserById);

module.exports = router;
