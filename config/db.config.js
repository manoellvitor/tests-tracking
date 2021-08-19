const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: env.dialect,
  storage: env.storage,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Motherboard = require('../models/Motherboard')(sequelize, Sequelize);
db.Dimm = require('../models/Dimm')(sequelize, Sequelize);
db.K2t = require('../models/K2t')(sequelize, Sequelize);
db.K2c = require('../models/K2c')(sequelize, Sequelize);
db.K2x = require('../models/K2x')(sequelize, Sequelize);
db.Ssd = require('../models/Ssd')(sequelize, Sequelize);

module.exports = db;
