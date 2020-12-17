const env = {
  dialect: 'sqlite',
  storage: '__dirname/hardware.sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  server: {
    PORT: 3000,
  },
};

module.exports = env;
