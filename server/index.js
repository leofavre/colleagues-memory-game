const app = require('./app/index.js');
const { HOST, PORT, NODE_ENV } = require('./constants.js');

require('./routes/login.js')(app);
require('./routes/oauth.js')(app);
require('./routes/index.js')(app);

app.listen(PORT, () => {
  console.log(`Started at ${HOST}:${PORT} in ${NODE_ENV} mode.`);
});
