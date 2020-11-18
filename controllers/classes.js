const database = require("../model/databaseAccess");

async function fetchAllClasses(req, res) {
  let classes = await database.getAllClasses();
  res.json(classes);
}

module.exports = { fetchAllClasses };