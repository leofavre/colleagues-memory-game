const axios = require('axios');
const { WEBSITE_PATH } = require('../constants.js');

module.exports = app => {
  app.get('/', async (req, res) => {
    if (req.session.access_token) {
      try {
        const { data } = await axios
          .get('https://api.github.com/user/public_emails', {
            headers: {
              Authorization: `token ${req.session.access_token}`,
              'User-Agent': 'Login-App'
            }
          });

        res.send(`
          <p>Here’s what you’ve asked for:</p>
          <pre>
            ${JSON.stringify(data, null, 2)}
          </pre>
        `);
      } catch (err) {
        console.log(err);
      }
    } else {
      res.sendFile(`${WEBSITE_PATH}/index.html`);
    }
  });
};
