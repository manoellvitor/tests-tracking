const db = require('../config/db.config');
const Motherboad = db.Motherboard;

// Get all Motherboards on DB
exports.searchBySerialNumber = (req, res) => {
  try {
    Motherboad.findAll({
      where: {
        assetId: req.body.search,
      },
    }).then((searchData) => {
      res.render('search', {
        title: 'Search Result',
        search: searchData,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
