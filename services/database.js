const { Client } = require('pg');

const database = (function() {

    let client = null;
    
    let database = function() {
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
    };

    let connect = function() {
        client.connect();
    }

    let close = function() {
        client.end();
    }

    database.prototype.read = function(query, cb) {
        
        connect();

        client.query(query, (error, response) => {
            if (error){
                console.log(error);
                return cb(error, null);
            }
    
            let _result = [];
            if (response && response.rows){
                for (let row of response.rows) {
                    _result.push(row);
                }
            }
            
            close();

            return cb(null, _result);
            
          });  
    };

    return database;

})();

module.exports = database;