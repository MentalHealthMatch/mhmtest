"use strict";

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("Class", {
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
    class: {
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
  });

  Class.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
  };

  return Class;
};
