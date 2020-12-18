const env = {
  dialect: 'sqlite',
  storage: 'database/hardware.sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  server: {
    PORT: 5000,
  },

  filesPath: {
    moboPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/',
  },
};

module.exports = env;
