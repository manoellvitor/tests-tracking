const db = require('../config/db.config');
const moment = require('moment');
const Motherboad = db.Motherboard;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sizeof = require('object-sizeof');

// Get all Motherboards on DB
exports.getAllMotherboards = (req, res) => {
  let start;
  let end;
  console.log(sizeof(req.body));
  if (req.body.start > 1) {
    console.log(req.body);
    start = req.body.start;
    end = req.body.end;
  } else {
    start = '1990-01-01';
    end = '3000-01-01';
  }
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
      where: {
        testedDate: {
          [Op.between]: [start, end],
        },
      },
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
