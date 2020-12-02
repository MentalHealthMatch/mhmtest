const express = require("express");
const router = express.Router();

//implemented full crud operations for users array with methods coming from controller folder.
const {
  getUsers,
  getUser,
  getUserLastNames,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/userController");

// @route GET
// @desc get all users
// @access public
router.get("/", getUsers);

// @route GET
// @desc get user last names
// @access public
router.get("/lastNames", getUserLastNames);

// @route GET
// @desc get a single user
// @access public
router.get("/:id", getUser);

// @route POST
// @desc add a new user
// @access public
router.post("/", addUser);

// @route PUT
// @desc edit user
// @access public
router.put("/:id", editUser);

// @route DELETE
// @desc edit user
// @access public
router.delete("/:id", deleteUser);

module.exports = router;
