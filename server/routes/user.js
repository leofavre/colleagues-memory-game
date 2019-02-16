const axios = require('axios');

module.exports = app => {
  app.get('/user', (req, res) => {
    axios
      .get('https://api.github.com/user/public_emails', {
        headers: {
          Authorization: `token ${req.session.access_token}`,
          'User-Agent': 'Login-App'
        }
      })
      .then(({ data }) => {
        res.send(`
          <p>Here’s what you’ve asked for:</p>
          <pre>
            ${JSON.stringify(data, null, 2)}
          </pre>
        `);
      });
  });
};
