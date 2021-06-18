let express = require('express');
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');
let mongoose = require('mongoose');
let app = express();
let port = process.env.PORT || 4000;
let mongoURL = config.URL || 'test';

mongoose.connect(mongoURL);

let Schema = mongoose.Schema;

let personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

let Person = mongoose.model('person', personSchema);

let john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});
let jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

//save the user
john.save(err => {
    if (err) throw err;

    console.log('person saved!');
});
jane.save(err => {
    if (err) throw err;

    console.log('person saved!');
});


app.use('/assets', express.static(__dirname + '/public'));
app.use ('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);

    //get all users
    Person.find({}, (err, users) => {
        if (err) throw err;

        console.log(users);
    });

    next();
})
app.set('view engine', 'ejs');

htmlController(app);
apiController(app);

app.listen(port);