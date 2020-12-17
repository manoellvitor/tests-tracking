const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: env.dialect,
  storage: env.storage,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Motherboard = require('../models/Motherboard')(sequelize, Sequelize);

module.exports = db;
