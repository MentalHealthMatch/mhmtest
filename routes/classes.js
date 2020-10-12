var express = require('express');
var router = express.Router();
const databaseAccess = require("./databaseAccess");

router.get("/", listallclasses); 

async function listallclasses(req, res) {
    res.json(await databaseAccess.getAllClasses());
}

module.exports = router;