const db = require("../models");
const User = db.User;

module.exports = {
  list: async (req, res, next) => {
    try {
      const users = await User.getFirstNames();
      const lastNames = await User.getLastNames();
      const userList = users.map((user) => ({
        ...user,
        last: lastNames.find((lastNameObject) => lastNameObject.id === user.id).last,
      }));
      res.json(userList);
    } catch (error) {
      next(error);
    }
  },
};
