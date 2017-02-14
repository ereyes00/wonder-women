const db = require('../models').sequelize;
const Event = require('../models').Event;
const Image = require('../models').Image;
const LocationHours = require('../models').LocationHours;
const Location = require('../models').Location;
const User = require('../models').User;
const Bookmark = require('../models').Bookmark;
// ////////////////////////////////////////
const events = require('./event-seed');
const images = require('./image-seed');
const location = require('./location-seed');
const locationHours = require('./locationHours-seed');
const user = require('./user-seed');
const bookmarks = require('./bookmark-seed');

db.sync({ force: true })
.then(() => User.bulkCreate(user))
.then(() => Location.bulkCreate(location))
.then(() => LocationHours.bulkCreate(locationHours))
.then(() => Event.bulkCreate(events))
.then(() => Image.bulkCreate(images))
.then(() => bookmarks());
