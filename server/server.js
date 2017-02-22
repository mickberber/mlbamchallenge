const express = require('express');
const app = express();
const router = express.Router();

const middleware = require('./middleware');

require('dotenv').config();

middleware(app, express);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log('listening at ' + server.address().port + '....');
});
