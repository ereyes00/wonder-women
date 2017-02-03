'use strict';

module.exports = function (sequelize, DataTypes) {
  const ExhibitionHours = sequelize.define('ExhibitionHours', {
    dayOfWeek: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    openTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 8]
      },
    },
    closeTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 8]
      },
    },
  }
  , {
    classMethods: {
      associate: function (models) {
        ExhibitionHours.belongsTo(models.Event);
      },
    },
  }
  );
  return ExhibitionHours;
};
