let users = require("./userData");
const { v4: uuidv4 } = require("uuid");

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

async function getUser(req, res) {
  const id = +req.params.id;
  const user = users.filter((user) => user.id === id);
  // console.log(user);
  try {
    res.status(200).json(user);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

async function getUserLastNames(req, res) {
  const lastNames = users.map((user) => user.lastName);
  try {
    res.status(200).json(lastNames);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

async function addUser(req, res) {
  const { firstName, lastName } = req.body;
  const id = uuidv4();
  const newUser = { id, firstName, lastName };
  users = [...users, newUser];
  // console.log(newUsers);
  res.status(200).json(users);
}

async function deleteUser(req, res) {
  const id = +req.params.id;
  users = users.filter((user) => user.id !== id);
  try {
    res.status(200).json(users);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}
async function editUser(req, res) {
  const id = +req.params.id;
  const { firstName, lastName } = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  users[userIndex] = { id, firstName, lastName };
  res.status(200).json(users);
}

module.exports = {
  getUsers,
  getUser,
  getUserLastNames,
  addUser,
  deleteUser,
  editUser,
};
