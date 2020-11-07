const createError = require('http-errors');

const db = require('../services/db');

const getAllClasses = async function (req, res) {
    const classes = await db.getAllClasses();
    res.json(classes);
};

const getClass = async function (req, res) {
    const classId = req.params.id;
    const allClasses = await db.getAllClasses();
    const classEntry = allClasses.find(entry => entry.id == classId);

    if (!classEntry) {
        res.status(404);
        res.send(createError.NotFound());
        return;
    }

    res.json(classEntry);
};

// const addClass = async function () {};
// const updateClass = async function () {};
// const deleteClass = async function () {};

module.exports = {
    getAllClasses,
    getClass,
    // addClass,
    // updateClass,
    // deleteClass
};
