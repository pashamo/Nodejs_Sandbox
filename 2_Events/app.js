//Using Custom Event Emitter
//let Emitter = require('./emitter');

//Using System Event Emitter
let Emitter = require('events');

let eventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
  console.log("Someone said hello");
});
emtr.on(eventConfig.GREET, () => console.log("a greeting occured!"));

emtr.emit(eventConfig.GREET);