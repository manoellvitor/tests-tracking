const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const Dimm = db.Dimm;
const K2t = db.K2t;
const K2c = db.K2c;
const K2x = db.K2x;

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
              try {
                K2t.findAll({
                  where: {
                    assetId: req.body.search,
                  },
                }).then((searchData) => {
                  if (searchData == '') {
                    try {
                      K2c.findAll({
                        where: {
                          assetId: req.body.search,
                        },
                      }).then((searchData) => {
                        if (searchData == '') {
                          try {
                            K2x.findAll({
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
