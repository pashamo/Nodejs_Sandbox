let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let html = fs.readFileSync(__dirname + '/index.htm');
        res.end(html);
    } else if (req.url === '/stream') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(4000, '127.0.0.1');