const express = require('express');
const classesService = require('./classes-service');

const classesRouter = express.Router();

classesRouter
  .get('/', (req, res, next) => {
    classesService.getAllClasses().then(classes => {
      res.json(classes);
    })
    .catch(next);
  });

module.exports = classesRouter;