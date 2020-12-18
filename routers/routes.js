const express = require('express');
const router = express.Router();

const databaseFiller = require('../helpers/databaseFiller');
const moboController = require('../controllers/moboController');

const path = __basedir + '/views/';

router.get('/', (req, res) => {
  databaseFiller.getMoboData();
  res.sendFile(path + 'index.html');
});

router.get('/motherboards', (req, res) => {
  res.sendFile(path + 'motherboards.html');
});

router.get('/api/v1.0/getallmotherboards', moboController.getAllMotherboards);

module.exports = router;
