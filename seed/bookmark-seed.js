const user = require('./user-seed.js');
const db = require('../models');

const bookmarkSeeds = function(){
  console.log(user[0]);
  db.User.findById(1)
    .then(function(data) {
      //console.log(data);
      data.addBookmark([2, 4])
  });

  db.User.findById(2)
    .then(function(data) {
      //console.log(data);
      data.addBookmark([6, 8])
  });

  db.User.findById(3)
    .then(function(data) {
      //console.log(data);
      data.addBookmark([10, 12])
  });

  db.User.findById(4)
    .then(function(data) {
      //console.log(data);
      data.addBookmark([14, 16])
  });

  db.User.findById(5)
    .then(function(data) {
      //console.log(data);
      data.addBookmark([18, 20])
  });
}

module.exports = bookmarkSeeds;
