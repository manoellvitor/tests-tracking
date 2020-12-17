module.exports = (sequelize, Sequelize) => {
  const Motherboard = sequelize.define('motherboard', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    addedDate: {
      type: Sequelize.DATEONLY,
    },
    assetId: {
      type: Sequelize.STRING,
    },
    macAddress: {
      type: Sequelize.STRING,
    },
    testedDate: {
      type: Sequelize.DATEONLY,
    },
    result: {
      type: Sequelize.STRING,
    },
    tester: {
      type: Sequelize.STRING,
    },
    mrb: {
      type: Sequelize.INTEGER,
    },
    comments: {
      type: Sequelize.STRING,
    },
  });

  return Motherboard;
};
