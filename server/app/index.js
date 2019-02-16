const express = require('express');
const session = require('express-session');
const randomString = require('randomstring');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(session({
  secret: randomString.generate(),
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));

module.exports = app;
