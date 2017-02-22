const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const middleware = require('./middleware');

middleware(app, express);

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('hello world');
});

const server = app.listen(3000, () => {
  console.log('listening at ' + server.address().port + '....')
});
