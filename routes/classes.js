const express = require('express');
const {  getAllClasses } = require('../db');
const router = express.Router();

router.get("/", async function(req, res, next){
    try {
        const classes = await getAllClasses();

        res.status(200).json(classes);  
    } catch(error) {
        res.status(500).json({error});
    }
});

module.exports = router;