let express = require('express');
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');
let app = express();
let port = process.env.PORT || 4000;

app.use('/assets', express.static(__dirname + '/public'));
app.use ('/', (req, res, next) => {
    console.log('Request URL: ' + req.url);
    next();
})
app.set('view engine', 'ejs');

htmlController(app);
apiController(app);

app.listen(port);