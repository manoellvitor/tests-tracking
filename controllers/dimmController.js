const db = require('../config/db.config');
const Dimm = db.Dimm;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all Dimms on DB
exports.getAllDimms = (req, res) => {
  try {
    Dimm.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'result', 'tester', 'comments'],
    }).then((dimmInfo) => {
      res.status(200).json({
        Dimms: dimmInfo,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getDimmByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;
  try {
    Dimm.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'result', 'tester', 'comments'],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((dimmInfo) => {
      res.render('dimm', {
        title: 'DIMMs',
        dimms: dimmInfo,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
