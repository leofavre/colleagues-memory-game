const { WEBSITE_PATH } = require('../constants.js');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(`${WEBSITE_PATH}/index.html`);
  });
};
