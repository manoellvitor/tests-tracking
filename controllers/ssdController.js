const db = require('../config/db.config');
const Ssd = db.Ssd;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all Ssd on DB
exports.getAllSsds = (req, res) => {
  try {
    Ssd.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'result', 'tester', 'comments'],
    }).then((ssdInfo) => {
      res.status(200).json({
        Ssds: ssdInfo,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getSsdByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;
  try {
    Ssd.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'result', 'tester', 'comments'],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((ssdInfo) => {
      res.render('ssd', {
        title: 'SSDs',
        ssds: ssdInfo,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
