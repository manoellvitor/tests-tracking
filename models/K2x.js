module.exports = (sequelize, Sequelize) => {
  const K2x = sequelize.define('K2x', {
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

  return K2x;
};
