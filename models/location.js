'use strict';

module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
    type:DataTypes.STRING,
    allowNull: true,
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, 
  {
    classMethods: {
      associate: function (models) {
        Location.hasMany(models.Event);
        Location.hasMany(models.LocationHours);
        Location.belongsTo(models.User)
      },
    },
  }
  );
  return Location;
};
