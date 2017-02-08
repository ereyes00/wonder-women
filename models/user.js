'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    museum: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    gallery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    artist: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    school: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    individual: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  } 
  // ,{
  //   classMethods: {
  //     associate: function (models) {
  //       User.belongsTo(models.Event);
  //     },
  //   },
  // }
  );
  return User;
};