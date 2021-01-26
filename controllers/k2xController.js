const db = require('../config/db.config');
const K2x = db.K2x;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all K2t on DB
exports.getAllK2xs = (req, res) => {
  try {
    K2x.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
    }).then((k2xInfos) => {
      res.status(200).json({
        K2xs: k2xInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getK2xByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;
  try {
    console.log(start, end);
    K2x.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'tester', 'result', 'comments'],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((k2xInfos) => {
      res.render('k2x', {
        title: 'K2Xs',
        k2xs: k2xInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
