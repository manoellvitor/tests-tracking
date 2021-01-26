const db = require('../config/db.config');
const K2t = db.K2t;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all K2t on DB
exports.getAllK2ts = (req, res) => {
  try {
    K2t.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
    }).then((k2tInfos) => {
      res.status(200).json({
        K2ts: k2tInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getK2tByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;

  try {
    K2t.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((k2tInfos) => {
      res.render('k2t', {
        title: 'K2Ts',
        k2ts: k2tInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
