const fs = require('fs');
const env = require('../config/env');
const xlsxFile = require('read-excel-file/node');

const db = require('../config/db.config');
const Motherboad = db.Motherboard;

const mobosPath = env.filesPath.moboPath;

// Get all the Excel files of Motherboards
exports.getMoboData = () => {
  try {
    fs.readdir(mobosPath, (err, files) => {
      if (err) {
        return console.log('Unable to ready directory:' + err.message);
      } else if (!files.length) {
        return console.log('Empty Directory');
      } else {
        fillMoboData(files, mobosPath);
      }
    });
  } catch (error) {
    console.log('Error: ' + error.message);
  }
};

// Fill DB with Motherboards data
fillMoboData = (files, mobosPath) => {
  try {
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
            resizeBy.status(500).json({
              Message: 'FAIL... Something wen wrong!',
              Error: error.message,
            });
          }
          Motherboad.create(motherboard);
        });
      });
    }
  } catch (error) {
    console.log('Error:' + error.message);
  }
};
