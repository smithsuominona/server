const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const port = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log('%s listening at http://localhost:3001'); // eslint-disable-line no-console
  });
});
