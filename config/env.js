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
    moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
  },
};

module.exports = env;

// moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
