const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const indexRoute = require('./routes/index.js');
const linkRoute = require('./routes/linkRoute.js');
const crawlerRoute = require('./routes/crawlerRoute.js');

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  

app.use('/', indexRoute);
app.use('/links', linkRoute);
app.use('/page-info', crawlerRoute);

app.listen(port, function () {
    console.log('Server on')
});