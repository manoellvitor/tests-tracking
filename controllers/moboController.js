const db = require('../config/db.config');
const sizeof = require('object-sizeof');
const Sequelize = require('sequelize');
const Motherboad = db.Motherboard;
const Op = Sequelize.Op;

// Get all Motherboards on DB
exports.getAllMotherboards = (req, res) => {
  let start;
  let end;
  if (sizeof(req.body) > 1) {
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
      if (sizeof(req.body) > 1) {
        console.log(moboInfos);
        res.render('mobo', {
          title: 'Motherboards',
          mobos: moboInfos,
        });
      } else {
        return res.status(200).json({
          Motherboards: moboInfos,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
