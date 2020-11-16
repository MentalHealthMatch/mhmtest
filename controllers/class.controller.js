const { NotExtended } = require("http-errors");
const db = require("../models");
const Class = db.Class;

module.exports = {
  list: async (req, res, next) => {
    try {
      const classes = await Class.getAllClasses();
      res.json(classes);
    } catch (error) {
      next(error);
    }
  },
};
