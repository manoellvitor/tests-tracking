const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

global.__basedir = __dirname;

const env = require('./config/env');
const router = require('./routers/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('resources'));
// app.use(function (req, res, next) {
//   res.setHeader(
//     'Content-Security-Policy',
//     "default-src 'self'; font-src 'self' https://fonts.gstatic.com; child-src 'self'; img-src 'self' https://images.unsplash.com;script-src * data: https://gstatic.com/** 'unsafe-inline' 'unsafe-eval'; style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css; frame-src 'self' https://www.youtube.com https://youtube.com; report-to csp-endpoint; report-uri /__cspreport__;",
//   );
//   next();
// });

app.use(cors());
app.use(morgan('tiny'));
app.use('/', router);

const PORT = env.server.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running at - http://localhost:${PORT}`);
});
