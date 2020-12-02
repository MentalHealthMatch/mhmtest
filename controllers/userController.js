let users = require("./userData");
const { v4: uuidv4 } = require("uuid"); //to generate unique id

//controller functions to implement create,read,update,delete functionality on users array

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

// getting a user with a matching id
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

// getting only lastName property from user object.
async function getUserLastNames(req, res) {
  try {
    const lastNames = users.map((user) => user.lastName);
    res.status(200).json(lastNames);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

//adding a new user into users array.
async function addUser(req, res) {
  try {
    const { firstName, lastName } = req.body;
    const id = uuidv4(); //getting unique id
    const newUser = { id, firstName, lastName };
    users = [...users, newUser];
    res.status(200).json(users);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

//removing matching user from the array.
async function deleteUser(req, res) {
  try {
    const id = +req.params.id;
    users = users.filter((user) => user.id !== id);
    res.status(200).json(users);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

//editing matching user info with the requested info.
async function editUser(req, res) {
  try {
    const id = +req.params.id;
    const { firstName, lastName } = req.body;
    const userIndex = users.findIndex((user) => user.id === id);
    users[userIndex] = { id, firstName, lastName };
    res.status(200).json(users);
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
}

module.exports = {
  getUsers,
  getUser,
  getUserLastNames,
  addUser,
  deleteUser,
  editUser,
};
