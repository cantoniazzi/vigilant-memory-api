const express = require('express');
const app = express();
const router = express.Router();

const indexRoute = require('./routes/index.js');
const linkRoute = require('./routes/linkRoute.js');

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

app.use('/', indexRoute);
app.use('/links', linkRoute);

app.listen(port, function () {
    console.log('Server on')
});