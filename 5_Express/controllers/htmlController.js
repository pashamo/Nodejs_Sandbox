let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

module.exports = app => {
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
    });
}