module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define('links', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            uuid: {
                type: DataTypes.STRING,
            },
            title: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING
            },
            uri: {
                type: DataTypes.STRING
            },
            tags: {
                type: DataTypes.STRING
            }
        }, 
        { 
            freezeTableName: true, 
            timestamps: false
        }
    );
    return Link;
};