const db = require('../config/db.config');
const Motherboad = db.Motherboard;

exports.populateDatabase = (rows) => {
  rows.forEach((data) => {
    let motherboard = {};
    console.log(data);
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
};
