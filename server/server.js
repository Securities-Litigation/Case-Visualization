const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const utils = require('./config/utils');
// const auth = require('./controllers/auth.controller');

let app = express();

//Middleware
// app.use(utils);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
  store: new RedisStore({
    url: 'redis://redis-session'
  }),
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized: false
}));

//Controllers
// auth.loadController(app);

app.use(express.static(__dirname + '/../client/public'));

module.exports = app;