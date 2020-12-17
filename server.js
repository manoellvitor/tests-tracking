const express = require('express');
const app = express();
const bodyParser = require('body-parse');
const morgan = require('morgan');
const helmet = require('helmet');

const env = require('./config/env');
const db = require('./config/db.config');
const router = require('./routers/routes');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with {force: true}');
});

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use(morgan('tiny'));
app.use(helmet());
app.use('/', router);

const PORT = env.server.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running at - http://localhost:${PORT}`);
});
