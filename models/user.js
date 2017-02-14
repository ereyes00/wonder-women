'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
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
      defaultValue: 'Individual',
    },
  } 
  ,{
    classMethods: {
      associate: function (models) {
        User.hasMany(models.Event);
        // This will add methods getEvents, setEvents, addEvents,addEvents to User
        User.belongsToMany(models.Event, { as: 'Bookmark', through: 'Bookmarks' });
      },
    },
  }
  );
  return User;
};