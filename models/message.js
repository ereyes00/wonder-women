'use strict';

module.exports = function (sequelize, DataTypes) {
  const Message = sequelize.define('Message', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  );
  return Message;
};
