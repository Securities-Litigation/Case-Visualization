var path = require('path');
var webpack = require('webpack');
var BUILD_DIR = path.resolve(__dirname, 'client/public');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/source/index'
  ],

  output: {
    path: path.join(__dirname, 'client/public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [{
      test: [/\.js$/, /\.jsx$/],
      loaders: [ 'babel' ],
      include: path.join(__dirname, 'client')
    }]
  }
};

module.exports = config;