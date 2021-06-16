let buf = new Buffer('Hello', 'utf8');
console.log(buf); 
console.log(buf.toString()); 
console.log(buf.toJSON()); 
console.log(buf[2]); 

buf.write('Mo');

console.log(buf.toString()); 


//es6 dealing with raw data
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 10;
view[2] = 15;

console.log(view);