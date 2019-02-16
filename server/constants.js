const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { HOST, PORT, CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = {
  WEBSITE_PATH: path.resolve(__dirname, '../website'),
  REDIRECT_URI: `${HOST}:${PORT}/oauth`,
  AUTH_URI: 'https://github.com/login/oauth/authorize',
  TOKEN_URI: 'https://github.com/login/oauth/access_token',
  HOST,
  PORT,
  CLIENT_ID,
  CLIENT_SECRET
};
