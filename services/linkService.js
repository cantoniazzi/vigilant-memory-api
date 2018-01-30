const linkModel = require('../models/linkModel.js');

const linkService = (function() {

    const model = new linkModel();
    
    let linkService = function() {
    };

    linkService.prototype.listAll = new Promise(
        function (resolve, reject) {
            model.listAll().then(function(links) {
                resolve(links);
            }).catch(function(error){
                reject(error); // reject
            });
        }
    );

    // linkService.prototype.getByUuid = function(uuid, cb) {
    //     let query = `SELECT * FROM links WHERE uuid = '${uuid}';`;
    //     db.execute(query, function(error, response){
    //         if (error){
    //             return cb(error, null);
    //         }
    //         return cb(null, response);
    //     });
    // };

    // linkService.prototype.create = function(data, cb) {

    //     let query = `INSERT INTO links (title, description, uri, tags) VALUES('${data.title}', '${data.description}', '${data.uri}', '${data.tags}')`
        
    //     db.execute(query, function(error, response){
    //         if (error){
    //             return cb(error, null);
    //         }
    //         return cb(null, response);
    //     });
    // };

    // linkService.prototype.update = function(uuid, data, cb) {
    //     let query = `UPDATE links SET title = '${data.title}', 
    //     description = '${data.description}', 
    //     uri = '${data.uri}',  
    //     tags = '${data.tags}'
    //      WHERE uuid = '${uuid}';`

    //     db.execute(query, function(error, response){
    //         if (error){
    //             return cb(error, null);
    //         }
    //         return cb(null, response);
    //     });
    // };

    // linkService.prototype.delete = function(uuid, cb) {
    //     let query = `DELETE FROM links WHERE uuid = '${uuid}';`;
    //     db.execute(query, function(error, response){
    //         if (error){
    //             return cb(error, null);
    //         }
    //         return cb(null, response);
    //     });
    // };

    return linkService;

})();

module.exports = linkService;