let modf1 = () => console.log('module 1');
let person = {
  fname: "Mohammed",
  lname: "Pasha",
  greet: function() {
    console.log('Hello, ' + this.fname + ' ' + this.lname);
  }
};

module.exports = { modf1 , person };