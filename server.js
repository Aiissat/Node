const http = require('http');

console.log('Server is running on http://localhost:3000');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Bonjour Node!!!</h1>');
    res.end();
}).listen(3000);