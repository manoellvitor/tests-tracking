const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const Dimm = db.Dimm;

// Get all Motherboards on DB
exports.searchBySerialNumber = (req, res) => {
  try {
    Motherboad.findAll({
      where: {
        assetId: req.body.search,
      },
    }).then((searchData) => {
      if (searchData == '') {
        try {
          Dimm.findAll({
            where: {
              assetId: req.body.search,
            },
          }).then((searchData) => {
            if (searchData == '') {
            } else {
              res.render('search', {
                title: 'Search Result',
                search: searchData,
              });
            }
          });
        } catch (error) {
          res.status(500).json({
            Message: 'Error fetching data!',
            Error: error.message,
          });
        }
      } else {
        res.render('search', {
          title: 'Search Result',
          search: searchData,
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
