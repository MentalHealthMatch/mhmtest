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

module.exports = { getUsers };
