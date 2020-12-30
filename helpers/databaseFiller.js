const fs = require('fs');
const env = require('../config/env');
const xlsxFile = require('read-excel-file/node');

const db = require('../config/db.config');
const Motherboad = db.Motherboard;
const Dimm = db.Dimm;

const mobosPath = env.filesPath.moboPath;
const dimmPath = env.filesPath.dimmPath;

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

setInterval(getMoboData, 1800000);
