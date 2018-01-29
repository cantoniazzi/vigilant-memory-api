const express = require('express');
const database = require('./services/database.js');

const app = express();
const db = new database();

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    
    db.read('SELECT * FROM test;', function(error, response){
        if (error) res.send(error.message);

        res.send(response);
    });
});

app.listen(port, function () {
    console.log('Server on')
});