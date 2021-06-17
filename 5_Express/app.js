let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 4000;
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.use ('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);
    next();
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
    res.render('index'); //using view engine
});

app.get('/person/:id', (req, res) => {
    // res.send('<html><head></head><body><h1>Hello '+ req.params.id +'!</h1></body></html>');
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); //using view engine
});
app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
app.post('/personjson', jsonParser, (req, res) => {
    res.send("Thank you for JSON data!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.get('/api', (req, res) => {
    res.json({ firstname: 'Mohammed', lastname: 'Pasha'});
});

app.listen(port);