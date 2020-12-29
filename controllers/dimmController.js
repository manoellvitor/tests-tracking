const db = require('../config/db.config');
const Dimm = db.Dimm;

// Get all Dimms on DB
exports.getAllDimms = (req, res) => {
  try {
    Dimm.findAll({
      order: [['testedDate', 'DESC']],
      attributes: ['testedDate', 'assetId', 'result', 'tester', 'comments'],
    }).then((dimmInfo) => {
      res.status(200).json({
        Dimms: dimmInfo,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
