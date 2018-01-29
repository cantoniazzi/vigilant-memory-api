const express = require('express');
const { Client } = require('pg');

const app = express();

// set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
      });
      
      client.connect();
      
      client.query('SELECT * FROM test;', (err, response) => {
        if (err) res.send(err.message);

        let _str = '';
        for (let row of response.rows) {
            console.log(JSON.stringify(row));
            _str+=row;
        }
        
        res.send(JSON.stringify(_str))
        client.end();
      });  
});



app.listen(port, function () {
    console.log('Server on')
});