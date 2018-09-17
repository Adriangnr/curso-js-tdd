const http = require('http');
const reload = require('require-reload')(require)
const config = require('./configTest')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

process.on('SIGUSR1', () => {
  console.log("Antes de relodear ---> ", config)
  console.log('Received SIGUSR1. Reloading...')
  config.reloadConfigs()
  console.log("DESPUES de relodear ---> ", config)
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
