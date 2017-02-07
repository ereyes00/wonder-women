'use strict';

module.exports = function (sequelize, DataTypes) {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
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
    hours: {
      type: DataTypes.STRING,
      allowNull: true,
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
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
    type:DataTypes.STRING,
    allowNull: false
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  , {
    classMethods: {
      associate: function (models) {
        Event.hasMany(models.Image);
        Event.hasMany(models.ExhibitionHours);
      },
    },
  }
  );
  return Event;
};
