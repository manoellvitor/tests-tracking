module.exports = (sequelize, Sequelize) => {
  const K2c = sequelize.define('K2c', {
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

  return K2c;
};
