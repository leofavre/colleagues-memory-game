const randomString = require('randomstring');
const qs = require('querystring');

const { AUTH_URI, REDIRECT_URI, CLIENT_ID } = require('../constants.js');

module.exports = app => {
  app.get('/login', (req, res) => {
    req.session.csrf_string = randomString.generate();

    res.redirect(`${AUTH_URI}?${
      qs.stringify({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: req.session.csrf_string,
        scope: 'user:email'
      })
    }`);
  });
};
