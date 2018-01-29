const database = require('./database.js');

const linkService = (function() {

    let db = null;
    
    let linkService = function() {
        db = new database();
    };

    linkService.prototype.listAll = function(cb) {
        let query = 'SELECT * FROM links;';
        db.read(query, function(error, response){
            if (error){
                return cb(error, null);
            }
            return cb(null, response);
        });
    };

    linkService.prototype.getByUuid = function(uuid, cb) {
        let query = `SELECT * FROM links WHERE uuid = '${uuid}';`;
        db.read(query, function(error, response){
            if (error){
                return cb(error, null);
            }
            return cb(null, response);
        });
    };

    linkService.prototype.create = function(data, cb) {
        let query = `SELECT * FROM links WHERE uuid = '${uuid}';`;
        db.read(query, function(error, response){
            if (error){
                return cb(error, null);
            }
            return cb(null, response);
        });
    };

    linkService.prototype.update = function(uuid, data, cb) {
        let query = `SELECT * FROM links WHERE uuid = '${uuid}';`;
        db.read(query, function(error, response){
            if (error){
                return cb(error, null);
            }
            return cb(null, response);
        });
    };

    linkService.prototype.delete = function(uuid, cb) {
        let query = `SELECT * FROM links WHERE uuid = '${uuid}';`;
        db.read(query, function(error, response){
            if (error){
                return cb(error, null);
            }
            return cb(null, response);
        });
    };

    return linkService;

})();

module.exports = linkService;