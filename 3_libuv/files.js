let fs = require('fs');

let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');

let greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', (err,data) => {
  if (err) {
    throw new Error("Wahgwan");
  }
  console.log(`${data} - async read`);
});

console.log(greet);
console.log("DONE!");