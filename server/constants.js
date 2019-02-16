const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { HOST, PORT } = process.env;

const REDIRECT_URI = PORT
  ? `${HOST}:${PORT}/oauth`
  : `${HOST}/oauth`;

module.exports = {
  WEBSITE_PATH: path.resolve(__dirname, '../website'),
  REDIRECT_URI,
  AUTH_URI: 'https://github.com/login/oauth/authorize',
  TOKEN_URI: 'https://github.com/login/oauth/access_token',
  ...process.env
};
