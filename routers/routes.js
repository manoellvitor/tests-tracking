const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
const sizeof = require('object-sizeof');

const moboController = require('../controllers/moboController');
const dimmController = require('../controllers/dimmController');
const k2tController = require('../controllers/k2tController');
const k2cController = require('../controllers/k2cController');
const k2xController = require('../controllers/k2xController');
const searchController = require('../controllers/searchController');

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome' });
});

router.get('/mobos', async (req, res) => {
  try {
    await axios
      .get('http://localhost:5000/api/v1.0/getallmotherboards')
      .then((mobosAPI) => {
        res.render('mobo', {
          title: 'Motherboards',
          mobos: mobosAPI.data.Motherboards,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/annas', async (req, res) => {
  res.render('anna', { title: 'Annapurnas' });
});

router.get('/k2ts', async (req, res) => {
  try {
    await axios
      .get('http://localhost:5000/api/v1.0/getallk2ts')
      .then((k2tsAPI) => {
        res.render('k2t', {
          title: 'K2Ts',
          k2ts: k2tsAPI.data.K2ts,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/k2cs', async (req, res) => {
  try {
    await axios
      .get('http://localhost:5000/api/v1.0/getallk2cs')
      .then((k2csAPI) => {
        res.render('k2c', {
          title: 'K2Cs',
          k2cs: k2csAPI.data.K2cs,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/k2xs', async (req, res) => {
  try {
    await axios
      .get('http://localhost:5000/api/v1.0/getallk2xs')
      .then((k2xsAPI) => {
        res.render('k2x', {
          title: 'K2Xs',
          k2xs: k2xsAPI.data.K2xs,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/dimms', async (req, res) => {
  try {
    await axios
      .get('http://localhost:5000/api/v1.0/getalldimms')
      .then((dimmsAPI) => {
        res.render('dimm', {
          title: 'DIMMs',
          dimms: dimmsAPI.data.Dimms,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/api/v1.0/getallmotherboards', moboController.getAllMotherboards);

router.get('/api/v1.0/getalldimms', dimmController.getAllDimms);

router.get('/api/v1.0/getallk2ts', k2tController.getAllK2ts);

router.get('/api/v1.0/getallk2cs', k2cController.getAllK2cs);

router.get('/api/v1.0/getallk2xs', k2xController.getAllK2xs);

router.post('/api/v1.0/search', async (req, res) => {
  await searchController.searchBySerialNumber(req, res);
});

router.post('/api/v1.0/getMoboByDate', async (req, res) => {
  await moboController.getMoboByDate(req, res);
});

router.post('/api/v1.0/getK2xByDate', async (req, res) => {
  await k2xController.getK2xByDate(req, res);
});

module.exports = router;
