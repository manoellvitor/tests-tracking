const express = require('express');
const router = express.Router();

const databaseFiller = require('../helpers/databaseFiller');

const path = __basedir + '/views/';

router.get('/', (req, res) => {
  databaseFiller.getMoboData();
  res.sendFile(path + 'index.html');
});

module.exports = router;
