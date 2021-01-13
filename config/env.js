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

// filesPath: {
//   moboPath: 'G:/Publics/Common/Debug/Testing/Foxconn motherboards/Tested/',
//   dimmPath: 'G:/Publics/Common/Debug/Testing/DIMMs/Tested/',
//   k2tPath: 'G:/Publics/Common/Debug/Testing/K2T/Tested/',
//   k2cPath: 'G:/Publics/Common/Debug/Testing/K2C/Tested/',
//   k2xPath: 'G:/Publics/Common/Debug/Testing/K2X/Tested/',
// },
