const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const path = __basedir + '/views/';

// Get all Motherboards on DB
exports.getAllMotherboards = (req, res) => {
  try {
    Motherboad.findAll({
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
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
