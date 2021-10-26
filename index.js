const http = require('http');
const testModule = require('./testModule')
const faker = require('faker');
const hostname = '127.0.0.1';
const port = 3000;

const randomName = faker.name.firstName();

const server = http.createServer((req, res) => {
  const url = req.url;
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if(url === '/users') {
    res.end(`Users ${randomName}`);
 } else {
     res.end(randomName);
 }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});