"use strict";
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const utils = require('./config/utils');

let app = express();
let PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));
app.get('/simple', function(req, res) {
  res.send({json: 'Hello world'});
});

app.listen(PORT, function() {
  console.log('Running on port ', PORT);
});

// we start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
 
new WebpackDevServer(webpack(config), {
   publicPath: config.output.publicPath,
   hot: true,
   historyApiFallback: true,
   proxy: {
     "*": "http://localhost:3000"
   }
}).listen(3001, 'localhost', function (err, result) {
   if (err) {
     console.log(err);
   }

   console.log('Listening at localhost:3001');
});