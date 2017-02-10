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
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('Individual', 'Museum', 'Gallery', 'School', 'Artist'),
      defaultValue: false,
    },
  } 
  ,{
    classMethods: {
      associate: function (models) {
        User.hasMany(models.Event);
        User.belongsToMany(models.Event, { through: 'Bookmark' });
        models.Event.belongsToMany(User, { through: 'Bookmark' });
      },
    },
  }
  );
  return User;
};