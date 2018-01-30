var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL);

let linkModel = (function(){
    let model = null;
    
    let linkModel = function() {
        model = defineModel();
    };

    linkModel.prototype.listAll = new Promise(
        function (resolve, reject) {

            model.findAll().then(function(links) {
                resolve(links);
            }).catch(function(error){
                reject(error); // reject
            });
        }
    );

    let defineModel = function(){
        return sequelize.define('link', {
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
    };

    return linkModel;

})();

module.exports = linkModel;

