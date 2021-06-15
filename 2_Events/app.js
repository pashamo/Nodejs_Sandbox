let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', function(){
  console.log("Someone said hello");
});
emtr.on('greet', () => console.log("a greeting occured!"));

emtr.emit('greet');