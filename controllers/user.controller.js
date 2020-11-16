const db = require("../models");
const User = db.User;

module.exports = {
  list: async (req, res, next) => {
    try {
      const users = await User.getUsers();
      const lastNames = await User.getLastNames();
      const stuff = users.map((user) => ({
        ...user,
        last: lastNames.find((lastNameObject) => lastNameObject.id === user.id).last,
      }));
      res.json(stuff);
    } catch (error) {
      next(error);
    }
  },
};
