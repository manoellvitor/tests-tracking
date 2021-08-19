module.exports = (sequelize, Sequelize) => {
  const Ssd = sequelize.define('ssd', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    testedDate: {
      type: Sequelize.DATEONLY,
    },
    assetId: {
      type: Sequelize.STRING,
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

  return Ssd;
};
