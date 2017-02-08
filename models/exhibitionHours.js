'use strict';

module.exports = function (sequelize, DataTypes) {
  const ExhibitionHours = sequelize.define('ExhibitionHours', {
    dayOfWeek: {
      type: DataTypes.ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      allowNull: false,
    },
    openTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closeTime: {
      type: DataTypes.TIME,
      allowNull: false,
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
