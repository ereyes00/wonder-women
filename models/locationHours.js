'use strict';

module.exports = function (sequelize, DataTypes) {
  const LocationHours = sequelize.define('LocationHours', {
    dayOfWeek: {
      type: DataTypes.ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      allowNull: true,//change it to false
    },
    openTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    closeTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    closed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
  , {
    classMethods: {
      associate: function (models) {
        LocationHours.belongsTo(models.Location);
      },
    },
  }
  );
  return LocationHours;
};

//datatype time
