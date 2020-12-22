const express = require('express');
const router = express.Router();

const db = require('../config/db.config');
const databaseFiller = require('../helpers/databaseFiller');
const moboController = require('../controllers/moboController');
const searchController = require('../controllers/searchController');

router.get('/', (req, res) => {
  db.sequelize.sync({ force: true }).then(() => {
    databaseFiller.getMoboData();
    res.render('index');
  });
});

router.get('/motherboards', (req, res) => {
  res.sendFile(path + 'motherboards.html');
});

router.get('/api/v1.0/getallmotherboards', moboController.getAllMotherboards);
router.get('/api/v1.0/searchbysn/:sn', searchController.searchBySerialNumber);

module.exports = router;
