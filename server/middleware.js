const morgan = require('morgan');
const bodyParser = require('body-parser');
const utils = require('./utils');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(utils.errorHandler);
  app.use(utils.logError);
}
