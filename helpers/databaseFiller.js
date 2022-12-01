const fs = require('fs');
const env = require('../config/env');
const xlsxFile = require('read-excel-file/node');
const axios = require('axios');

const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const Dimm = db.Dimm;
const K2t = db.K2t;
const K2c = db.K2c;
const K2x = db.K2x;
const Ssd = db.Ssd;

const mobosPath = env.filesPath.moboPath;
const dimmPath = env.filesPath.dimmPath;
const k2tPath = env.filesPath.k2tPath;
const k2cPath = env.filesPath.k2cPath;
const k2xPath = env.filesPath.k2xPath;
const ssdPath = env.filesPath.ssdPath;

let flag = 1;

// Get all the Excel files of Motherboards
function getMoboData() {
  try {
    fs.readdir(mobosPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          Motherboad.sync({ force: true }).then(() => {
            try {
              // db.sequelize.sync({ force: false });
              for (i = 0; i < files.length; i++) {
                xlsxFile(mobosPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let motherboard = {};
                    try {
                      motherboard.addedDate = data[0];
                      motherboard.assetId = data[1];
                      motherboard.macAddress = data[2];
                      motherboard.testedDate = data[3];
                      motherboard.result = data[4];
                      motherboard.tester = data[5];
                      motherboard.mrb = data[6];
                      motherboard.comments = data[7];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      Motherboad.create(motherboard);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
          getDimmData();
          // fillMoboData(files, mobosPath);
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

// Get all the Excel files of DIMMs
function getDimmData() {
  try {
    fs.readdir(dimmPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          // fillDimmData(files, dimmPath);
          Dimm.sync({ force: true }).then(() => {
            try {
              for (i = 0; i < files.length; i++) {
                xlsxFile(dimmPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let dimm = {};
                    try {
                      dimm.testedDate = data[0];
                      dimm.assetId = data[1];
                      dimm.result = data[2];
                      dimm.tester = data[3];
                      dimm.mrb = data[4];
                      dimm.comments = data[5];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      Dimm.create(dimm);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
          getK2tData();
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

// Get all the Excel files of K2Ts
function getK2tData() {
  try {
    fs.readdir(k2tPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          // fillDimmData(files, dimmPath);
          K2t.sync({ force: true }).then(() => {
            try {
              for (i = 0; i < files.length; i++) {
                xlsxFile(k2tPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let k2t = {};
                    try {
                      k2t.addedDate = data[0];
                      k2t.assetId = data[1];
                      k2t.testedDate = data[2];
                      k2t.result = data[3];
                      k2t.tester = data[4];
                      k2t.mrb = data[5];
                      k2t.comments = data[6];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      K2t.create(k2t);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
          getK2cData();
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

// Get all the Excel files of K2Cs
function getK2cData() {
  try {
    fs.readdir(k2cPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          // fillDimmData(files, dimmPath);
          K2c.sync({ force: true }).then(() => {
            try {
              for (i = 0; i < files.length; i++) {
                xlsxFile(k2cPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let k2c = {};
                    try {
                      k2c.addedDate = data[0];
                      k2c.assetId = data[1];
                      k2c.testedDate = data[2];
                      k2c.result = data[3];
                      k2c.tester = data[4];
                      k2c.mrb = data[5];
                      k2c.comments = data[6];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      K2c.create(k2c);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
          getK2xData();
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

// Get all the Excel files of K2Xs
function getK2xData() {
  try {
    fs.readdir(k2xPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          // fillDimmData(files, dimmPath);
          K2x.sync({ force: true }).then(() => {
            try {
              for (i = 0; i < files.length; i++) {
                xlsxFile(k2xPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let k2x = {};
                    try {
                      k2x.addedDate = data[0];
                      k2x.assetId = data[1];
                      k2x.testedDate = data[2];
                      k2x.result = data[3];
                      k2x.tester = data[4];
                      k2x.mrb = data[5];
                      k2x.comments = data[6];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      K2x.create(k2x);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
          getSsdData();
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

// Get all the Excel files of SSDs
function getSsdData() {
  try {
    fs.readdir(ssdPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        try {
          // fillDimmData(files, dimmPath);
          Ssd.sync({ force: true }).then(() => {
            try {
              for (i = 0; i < files.length; i++) {
                xlsxFile(ssdPath + files[i]).then((rows) => {
                  rows.shift();
                  rows.forEach((data) => {
                    let ssd = {};
                    try {
                      ssd.addedDate = data[0];
                      ssd.assetId = data[1];
                      ssd.testedDate = data[2];
                      ssd.result = data[3];
                      ssd.tester = data[4];
                      ssd.mrb = data[5];
                      ssd.comments = data[6];
                    } catch (error) {
                      res.status(500).json({
                        Message: 'FAIL... Something wen wrong!',
                        Error: error.message,
                      });
                    }
                    try {
                      Ssd.create(ssd);
                    } catch (error) {
                      console.log('Error:' + error.message);
                    }
                  });
                });
              }
            } catch (error) {
              console.log('Error:' + error.message);
            }
          });
        } catch (error) {
          console.log('Error: ' + error.message);
        }
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

if (flag == 1) {
  try {
    getMoboData();
  } catch (error) {
    console.log('Error:' + error.message);
  }
  flag = 0;
}

setInterval(async () => {
  await getMoboData();
}, 1800000);
