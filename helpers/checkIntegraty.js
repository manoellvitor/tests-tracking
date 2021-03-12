const axios = require('axios');
const chalk = require('chalk');

require('dotenv').config();

let link = process.env.GIT_LINK;

module.exports = function () {
  return function (req, res, next) {
    try {
      axios.get(link).then((res) => {
        if (res.data.company === 'Jabil') {
          next();
        } else {
          console.log(
            chalk.red.bold(
              'Get in touch with Manoel Lopes -> manoelvitorka@gmail.com ! ',
            ),
          );
          process.exit();
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
