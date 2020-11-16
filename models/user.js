"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: "Id must be at least 3 characters in length",
        },
      },
      unique: {
        args: true,
        msg: "Id is already in use!",
      },
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: {
          args: 3,
          msg: "First Name must be at least 3 characters in length",
        },
      },
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: {
          args: 3,
          msg: "Last Name must be at least 3 characters in length",
        },
      },
    },
  });

  User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
  };

  return User;
};
