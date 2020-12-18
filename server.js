const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

global.__basedir = __dirname;

const env = require('./config/env');
const db = require('./config/db.config');
const router = require('./routers/routes');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with {force: true}');
});

app.use(
  bodyParser.json({
    urlencoded: false,
  }),
);

app.use(express.static('resources'));
app.use(morgan('tiny'));
app.use(helmet());
app.use('/', router);

const PORT = env.server.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running at - http://localhost:${PORT}`);
});
