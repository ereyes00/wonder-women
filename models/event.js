'use strict';

module.exports = function (sequelize, DataTypes) {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    opening: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    closing: {
      type: DataTypes.STRING,
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
        Event.belongsTo(models.Location);
      },
    },
  }
  );
  return Event;
};
