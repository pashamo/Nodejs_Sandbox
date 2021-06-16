let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet2.txt');

let writable = fs.createWriteStream(__dirname + '/greet2copy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet2.txt.gz');

let gzib = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzib).pipe(compressed);