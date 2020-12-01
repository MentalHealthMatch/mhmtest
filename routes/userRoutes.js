const express = require("express");
const router = express.Router();

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
router.get("/", getUsers);

// @route GET
// @desc get user last names
router.get("/lastNames", getUserLastNames);

// @route GET
// @desc get a single user
router.get("/:id", getUser);

// @route POST
// @desc add a new user
router.post("/", addUser);

// @route PUT
// @desc edit user
router.put("/:id", editUser);

// @route DELETE
// @desc edit user
router.delete("/:id", deleteUser);

module.exports = router;
