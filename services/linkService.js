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

    linkService.prototype.update = function(uuid, data) {
        return new Promise(
            function (resolve, reject) {
                model.update(uuid, data).then(function(updatedItem) {
                    resolve(updatedItem);
                }).catch(function(error){
                    reject(error);
                });
            }
        );
    };

    linkService.prototype.delete = function(uuid) {
        return new Promise(
            function (resolve, reject) {
                model.delete(uuid).then(function(deletedItem) {
                    resolve(deletedItem);
                }).catch(function(error){
                    reject(error);
                });
            }
        );
    };

    return linkService;

})();

module.exports = linkService;