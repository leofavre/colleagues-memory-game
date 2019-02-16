const app = require('./app/index.js');
const { HOST, PORT } = require('./constants.js');

require('./routes/login.js')(app);
require('./routes/oauth.js')(app);
require('./routes/user.js')(app);
require('./routes/index.js')(app);

app.listen(PORT, () => {
  console.log(`Listening at ${HOST}:${PORT}`);
});
