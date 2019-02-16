const axios = require('axios');
const qs = require('querystring');

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  TOKEN_URI
} = require('../constants.js');

module.exports = app => {
  app.all('/oauth', async (req, res) => {
    const { code, state: returnedState } = req.query;

    if (req.session.csrf_string === returnedState) {
      try {
        const { data } = await axios
          .post(`${TOKEN_URI}?${
            qs.stringify({
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              code,
              redirect_uri: REDIRECT_URI,
              state: req.session.csrf_string
            })
          }`);

        req.session.access_token = qs.parse(data).access_token;
      } catch (err) {
        console.log(err);
      }
    }

    res.redirect('/');
  });
};
