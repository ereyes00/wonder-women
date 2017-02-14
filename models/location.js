'use strict';

module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber:{
      type: DataTypes.STRING,
      allowNull: true,
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
