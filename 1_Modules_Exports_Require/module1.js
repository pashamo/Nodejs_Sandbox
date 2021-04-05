//Function
let modf1 = () => console.log('module 1');

//Person object
let person = {
  fname: "Mohammed",
  lname: "Pasha",
  greet: function() {
    console.log('Hello, ' + this.fname + ' ' + this.lname);
  }
};

//Prototype test
function person2(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
person2.prototype.greet = function() {
  console.log('Hello, ' + this.fname + ' ' + this.lname);
}

//Pass by reference or value

module.exports = { modf1 , person , person2 };