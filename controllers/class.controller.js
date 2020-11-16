const db = require("../models");
const Class = db.Class;

module.exports = {
  list: async (req, res) => {
    const classes = await Class.getAllClasses();
    res.json(classes);
  },
};
