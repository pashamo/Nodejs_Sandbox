let express = require('express');
let app = express();

let port = process.env.PORT || 4000;

let people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jene Doe'
    }
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('index', { serverPeople: people });

});

app.listen(port);