var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://ugtgfnhmusnqoz:176339cbaedbb88e1df0222855d56ce3a45d0b8c0d91db7a35a9bfe416ff4b9f@ec2-54-225-103-255.compute-1.amazonaws.com:5432/d94caap723e19o', {dialect: 'postgres'});

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
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        }
        }, {
        freezeTableName: true
    });
    
    let linkModel = function() {
    };

    linkModel.prototype.listAll = function(){
        return new Promise(
            function (resolve, reject) {
                model.findAll().then(function(links) {
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

