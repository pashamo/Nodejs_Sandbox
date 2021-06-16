let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf-8');
    var message = 'Hello world...';

    html = html.replace('{Message}', message);
    
    res.end(html);

}).listen(4000, '127.0.0.1');