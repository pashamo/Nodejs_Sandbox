let { modf1 , person, person2 } = require('./module1');
modf1();

person.greet();
console.log(person['fname']);

let john = new person2('John', 'Doe');
john.greet();