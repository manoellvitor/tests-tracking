const env = {
  dialect: 'sqlite',
  storage: 'database/hardware.sqlite3',

  server: {
    PORT: 5000,
  },

  filesPath: {
    moboPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/MB/',
    dimmPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/DIMM/',
  },
};

module.exports = env;

// moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
// dimmPath: 'G:/Publics/Common/Debug/Testing/DIMMs/Tested/',
