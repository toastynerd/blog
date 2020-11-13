const server = require('./server');
const config = require('./config');

server.start(config, ( { port }) => {
  console.log(`server started on port ${port}`);
});
