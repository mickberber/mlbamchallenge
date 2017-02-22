const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const utils = require('./utils');
const rootRouterConfig = require('./routes/root');

module.exports = (app, express) => {
  app.use(morgan('dev'));

  app.use(compression());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(utils.errorHandler);
  app.use(utils.logError);

  const rootRouter = express.Router();
  app.use('/api/root', rootRouter);
  rootRouterConfig(rootRouter);

  app.use('/', express.static(path.join(__dirname, '../public/dist')));
}
