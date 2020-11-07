const express = require('express');
const classRouter = express.Router();
const {
    getAllClasses,
    getClass,
    // addClass,
    // updateClass,
    // deleteClass
} = require('../../controllers/classes.contollers');

classRouter.get('/:id', getClass);
classRouter.get('/', getAllClasses);

// NOTE: generally an API will have the following routes as well, but these haven't been implemented because that would require adding a lot of functionality that a DB provides
// classRouter.post('/', addClass);
// classRouter.put('/:id', updateClass);
// classRouter.delete('/:id', deleteClass);

module.exports = classRouter;
