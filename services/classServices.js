const databaseAccess = require("../routes/databaseAccess");
const database = require("../routes/databaseAccess");
var createError = require('http-errors')

// Returns the list of all Classes
const listAllClasses = async function(req, res, next) {
  try{
    res.json(await database.getAllClasses());
  }
  catch (e) {
    console.log(e);
    res.status(503).send("Service unavailable");
  }
}

// Returns the class based on the id
const getClassById = async function(req, res, next) {
  let classData = {};
  try{
    classData = await database.getAllClasses();
  }
  catch (e) {
    console.log(e);
    res.status(503).send("Service unavailable");
  }
  let matchingClass = classData.filter(x => x.id == req.params.id);
  // If no match is found
  if(matchingClass.length == 0) {
    res.status(404).send("Class id not found");

  }else{
    res.json(matchingClass);
  }
}

module.exports.listAllClasses = listAllClasses;
module.exports.getClassById = getClassById;
