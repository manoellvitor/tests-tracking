const db = require('../config/db.config');
const K2c = db.K2c;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all K2t on DB
exports.getAllK2cs = (req, res) => {
  try {
    K2c.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
    }).then((k2cInfos) => {
      res.status(200).json({
        K2cs: k2cInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getK2cByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;
  try {
    K2c.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((k2cInfos) => {
      res.render('k2c', {
        title: 'K2Cs',
        k2cs: k2cInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
