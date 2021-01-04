const express = require('express');
const router = express.Router();
const axios = require('axios');

const moboController = require('../controllers/moboController');
const dimmController = require('../controllers/dimmController');
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
  res.render('k2t', { title: 'K2T Cards' });
  // try {
  //   await axios
  //     .get('http://localhost:5000/api/v1.0/getalldimms')
  //     .then((dimmsAPI) => {
  //       res.render('dimm', {
  //         title: 'DIMMs',
  //         dimms: dimmsAPI.data.Dimms,
  //       });
  //     });
  // } catch (error) {
  //   console.log(error.message);
  // }
});

router.get('/k2cs', async (req, res) => {
  res.render('k2c', { title: 'K2C Cards' });
  // try {
  //   await axios
  //     .get('http://localhost:5000/api/v1.0/getalldimms')
  //     .then((dimmsAPI) => {
  //       res.render('dimm', {
  //         title: 'DIMMs',
  //         dimms: dimmsAPI.data.Dimms,
  //       });
  //     });
  // } catch (error) {
  //   console.log(error.message);
  // }
});

router.get('/k2xs', async (req, res) => {
  res.render('k2x', { title: 'K2X Cards' });
  // try {
  //   await axios
  //     .get('http://localhost:5000/api/v1.0/getalldimms')
  //     .then((dimmsAPI) => {
  //       res.render('dimm', {
  //         title: 'DIMMs',
  //         dimms: dimmsAPI.data.Dimms,
  //       });
  //     });
  // } catch (error) {
  //   console.log(error.message);
  // }
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

router.post('/api/v1.0/search', async (req, res) => {
  await searchController.searchBySerialNumber(req, res);
});

module.exports = router;
