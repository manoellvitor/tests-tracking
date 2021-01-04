const db = require('../config/db.config');
const K2x = db.K2x;

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
