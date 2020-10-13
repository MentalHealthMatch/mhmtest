const databaseAccess = require("./databaseAccess");

async function listallclasses(req, res) {
    res.json(await databaseAccess.getAllClasses());                     //  this was easy fix it was missing out await 
}

module.exports = { listallclasses };
