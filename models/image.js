'use strict';

module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  }
  , {
    classMethods: {
      associate: function (models) {
        Image.belongsTo(models.Event);
      },
    },
  }
  );
  return Image;
};
