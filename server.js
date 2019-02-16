const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();
const { PORT } = process.env;

(async () => {
  await app.listen(PORT);
  console.log(`Server listening at ${PORT}`);
})();
