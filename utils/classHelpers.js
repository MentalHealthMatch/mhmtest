const {  getAllClasses } = require('../db');


/**
 * @returns {array} - an array containing all classes in object form
 */
async function getClasses() {
    const classes = await getAllClasses();

    return classes;
}

/**
 * @param {number} id
 * @returns {object} - an object containing record for a single class
 */
async function getClassById(id) {
    const classes = await getAllClasses();
    const classRecord = classes.filter(record => record.id === id)[0];

    return classRecord;
}

module.exports = {
    getClasses,
    getClassById
}