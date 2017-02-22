const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const middleware = require('./middleware');

require('dotenv').config();

middleware(app, express);

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log('listening at ' + server.address().port + '....')
});
