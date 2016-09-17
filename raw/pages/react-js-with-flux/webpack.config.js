var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/dist');
var APP_DIR = path.resolve(__dirname, 'app/app');

var config = {module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR + '/js',
    filename: 'bundle.js'
  }
};

module.exports = config;