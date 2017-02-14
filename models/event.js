'use strict';

module.exports = function (sequelize, DataTypes) {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    opening: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    closing: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    featuredArtist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, 
  {
    classMethods: {
      associate: function (models) {
        Event.hasMany(models.Image);
        Event.belongsToMany(models.User, { as: 'Bookmark', through: 'Bookmarks' });
        Event.belongsTo(models.Location);
      },
    },
  }
  );
  return Event;
};
