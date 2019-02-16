const app = require('./app/index.js');
const dotenv = require('dotenv');

dotenv.config();
const { HOST, PORT } = process.env;

require('./routes/index.js')(app);

app.listen(PORT, () => {
  console.log(`Listening at ${HOST}:${PORT}`);
});
