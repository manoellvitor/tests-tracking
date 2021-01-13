const db = require('../config/db.config');
const moment = require('moment');
const Motherboad = db.Motherboard;

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
