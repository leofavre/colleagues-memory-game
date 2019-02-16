const express = require('express');
const session = require('express-session');
const randomString = require('randomstring');

const app = express();

app.use(session({
  secret: randomString.generate(),
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));

module.exports = app;
