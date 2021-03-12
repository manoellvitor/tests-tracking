require('dotenv').config();

const env = {
  dialect: 'sqlite',
  storage: 'database/hardware.sqlite3',

  server: {
    PORT: process.env.PORT,
  },

  filesPath: {
    moboPath: process.env.MOBO_PATH,
    dimmPath: process.env.DIMM_PATH,
    k2tPath: process.env.K2T_PATH,
    k2cPath: process.env.K2C_PATH,
    k2xPath: process.env.K2X_PATH,
  },
};

module.exports = env;
