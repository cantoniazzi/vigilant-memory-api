const express = require('express');
const { Client } = require('pg');

const app = express();

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  client.connect();
  
  client.query('SELECT * FROM test;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });  

app.listen(port, function () {
    console.log('Server on')
});