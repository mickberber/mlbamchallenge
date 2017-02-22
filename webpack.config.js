const path = require('path');
const webpack = require('webpack');

module.exports = () => {
  let config = {
    entry: './public/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname + '/public/dist/'),
    },
  }
  return config;
}
