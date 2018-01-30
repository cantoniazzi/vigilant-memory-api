const linkModel = require('../models/linkModel.js');

const linkService = (function() {

    const model = new linkModel();
    
    let linkService = function() {
    };

    linkService.prototype.listAll = function(){
        return new Promise(
            function (resolve, reject) {
                model.listAll().then(function(links) {
                    resolve(links);
                }).catch(function(error){
                    reject(error); // reject
                });
            }
        );
    } 

    linkService.prototype.getByUuid = function(uuid) {
        return new Promise(
            function (resolve, reject) {
                model.getByUuidField(uuid).then(function(item) {
                    resolve(item);
                }).catch(function(error){
                    reject(error);
                });
            }
        );
    };

    linkService.prototype.create = function(data) {
        return new Promise(
            function (resolve, reject) {
                model.create(data).then(function(savedItem) {
                    resolve(savedItem);
                }).catch(function(error){
                    reject(error);
                });
            }
        );
    };

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