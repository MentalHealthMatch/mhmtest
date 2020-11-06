const express = require('express');
const { getClasses, getClassById } = require('../utils/classHelpers');

const router = express.Router();

// get all classes
router.get("/", async function(req, res, next){
    try {
        const classes = await getClasses();

        res.status(200).json(classes);  
    } catch(error) {
        res.status(500).json({error});
    }
});

// get class by id
router.get("/:id", async function(req, res, next){
    try {
        const { id } = req.params;
        const classRecord = await getClassById(Number(id));

        if(!classRecord) {
            return req.status(404).send("No class with that id. Please try again.");
        }

        res.status(200).json(classRecord);
    } catch(error) {
        res.status(500).json({error});
    }
});

module.exports = router;