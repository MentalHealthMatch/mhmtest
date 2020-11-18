const database = require("../model/databaseAccess");

async function fetchAllUsers(req, res) {
  const stuff = await database.getUsers();
  const lastNames = await database.getLastNames();
  stuff.map((item) => {
    const stuffId = item.id;
    const lastName = lastNames.find((lastNameObj) => lastNameObj.id == stuffId);
    item.last = lastName.last;
    return item;
  });
  res.json(stuff);
}

module.exports = { fetchAllUsers };