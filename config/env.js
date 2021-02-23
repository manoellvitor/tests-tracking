const env = {
  dialect: 'sqlite',
  storage: 'database/hardware.sqlite3',

  server: {
    PORT: 5000,
  },

  filesPath: {
    moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
    dimmPath: 'G:/Publics/Common/Debug/Testing/DIMMs/Tested/',
    k2tPath: 'G:/Publics/Common/Debug/Testing/K2T/Tested/',
    k2cPath: 'G:/Publics/Common/Debug/Testing/K2C/Tested/',
    k2xPath: 'G:/Publics/Common/Debug/Testing/K2X/Tested/',
  },
};

module.exports = env;

// Production Paths
// filesPath: {
//   moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
//   dimmPath: 'G:/Publics/Common/Debug/Testing/DIMMs/Tested/',
//   k2tPath: 'G:/Publics/Common/Debug/Testing/K2T/Tested/',
//   k2cPath: 'G:/Publics/Common/Debug/Testing/K2C/Tested/',
//   k2xPath: 'G:/Publics/Common/Debug/Testing/K2X/Tested/',
// },

// DEV Paths
// filesPath: {
//   moboPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/MB/',
//   dimmPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/DIMM/',
//   k2tPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/K2T/',
//   k2cPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/K2C/',
//   k2xPath: 'C:/Users/2514164.JABIL/Desktop/TestedHardware/K2X/',
// },
