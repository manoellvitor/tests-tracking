const db = require('../config/db.config');
const moment = require('moment');
const Motherboad = db.Motherboard;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all Motherboards on DB
exports.getAllMotherboards = (req, res) => {
  try {
    Motherboad.findAll({
      order: [['testedDate', 'DESC']],
      attributes: [
        'testedDate',
        'assetId',
        'macAddress',
        'tester',
        'result',
        'comments',
      ],
    }).then((moboInfos) => {
      res.status(200).json({
        Motherboards: moboInfos,
        moment: moment,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};

exports.getMoboByDate = (req, res) => {
  const start = req.body.start;
  const end = req.body.end;
  try {
    console.log(start, end);
    Motherboad.findAll({
      order: [['testedDate', 'DESC']],
      attributes: [
        'testedDate',
        'assetId',
        'macAddress',
        'tester',
        'result',
        'comments',
      ],
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
    }).then((moboInfos) => {
      res.status(200).json({
        Motherboards: moboInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
