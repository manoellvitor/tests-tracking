const db = require('../config/db.config');
const K2t = db.K2t;

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
