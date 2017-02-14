// giving access to the association table by making the association a model
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define("Bookmarks", {
  });

  return Bookmark;
};