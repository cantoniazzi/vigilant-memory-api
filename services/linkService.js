const database = require('./database.js');

const linkService = (function() {

    let db = null;
    
    let linkService = function() {
        db = new database();
    };

    linkService.prototype.listAll = function(cb) {
        let query = 'SELECT * FROM links;';
        db.read(query, (error, response) => {
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

            return cb(null, _result);
            
          });  
    };

    return linkService;

})();

module.exports = linkService;