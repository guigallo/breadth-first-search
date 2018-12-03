const app = require('./config/express')();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;
const server = http.listen(port, () => {
  let usingHost = server.address().address;
  let usingPort = server.address().port;

  console.log('App listening at http://%s:%s', usingHost, usingPort);
});