var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:pass@host:5432/name', {dialect: 'postgres'});

let linkModel = (function(){
    
    let model = sequelize.define('links', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: Sequelize.STRING,
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        },
        uri: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.STRING
        }
        }, {
        freezeTableName: true
    });
    
    let linkModel = function() {
    };

    linkModel.prototype.listAll = function(){
        return new Promise(
            function (resolve, reject) {
                model.findAll({
                    attributes : ['uuid', 'title', 'description', 'uri', 'tags']}
                ).then(function(links) {
                    resolve(links);
                }).catch(function(error){
                    reject(error); // reject
                });
            }
        );
    }

    

    return linkModel;

})();

module.exports = linkModel;

