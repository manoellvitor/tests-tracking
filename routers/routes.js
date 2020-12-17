const express = require('express');
const router = express.Router();

const motherboards = require('../controllers/moboController');

const path = __dirname + '/views/';

router.get('/', (req, res) => {
  console.log('__dirname' + __dirname);
  res.sendFile(path + 'index.html');
});

module.exports = router;
