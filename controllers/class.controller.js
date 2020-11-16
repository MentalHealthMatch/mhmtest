const db = require("../models");
const Class = db.Class;

module.exports = {
  list: async (req, res, next) => {
    try {
      const classes = await Class.getClasses();
      res.json(classes);
    } catch (error) {
      next(error);
    }
  },
};
