const users = require("./userData");

async function getUsers(req, res) {
  try {
    res.status(200).json(users);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

async function getUser() {}
async function getUserLastNames() {}
async function addUser() {}
async function deleteUser() {}
async function editUser() {}

module.exports = {
  getUsers,
  getUser,
  getUserLastNames,
  addUser,
  deleteUser,
  editUser,
};
