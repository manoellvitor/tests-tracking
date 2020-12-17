const fs = require('fs');
const env = require('../config/env');
const xlsxFile = require('read-excel-file/node');

const moboController = require('../controllers/moboController');
const mobosPath = env.filesPath.moboPath;

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

fillMoboData = (files, mobosPath) => {
  let motherboards = {};
  try {
    for (i = 0; i < files.length; i++) {
      xlsxFile(mobosPath + files[i]).then((rows) => {
        rows.shift();
        moboController.populateDatabase(rows);
        //rows.forEach((line) => {});
      });
    }
  } catch (error) {
    console.log('Error:' + error.message);
  }
};
