const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello world');
});

const server = app.listen(3000, () => {
  console.log('listening at ' + server.address().port + '....')
});
