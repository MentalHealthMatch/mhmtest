const express = require('express');
const {  getAllClasses } = require('./databaseAccess');
const router = express.Router();

router.get("/", async function(req, res, next){
    const classes = await getAllClasses();

    res.status(200).json(classes);
});

module.exports = router;