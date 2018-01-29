const express = require('express');

const app = express();

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  

app.listen(port, function () {
    console.log('Server on')
});