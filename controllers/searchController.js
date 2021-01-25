const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const Dimm = db.Dimm;
const K2t = db.K2t;
const K2c = db.K2c;
const K2x = db.K2x;

// Get Especifique Hardware by Serial Number
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
                                res.render('search', {
                                  title: 'Search Result',
                                  search: searchData,
                                });
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
      res.render('search', {
        title: 'Manoel',
        search: moboInfos,
      });
    });
  } catch (error) {
    res.status(500).json({
      Message: 'Error fetching data!',
      Error: error.message,
    });
  }
};
