let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet2.txt', {encoding: 'utf-8', highWaterMark: 8*1024});

let writable = fs.createWriteStream(__dirname + '/greet2copy.txt');

readable.on('data', (chunk) => {
  console.log(chunk.length);
  writable.write(chunk);
});