module.exports = (sequelize, DataTypes) => {
    return sequelize.define("product", {
        ID_Product: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[0,250]
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            length:[1,10]
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[1,100] 
        },
        Components: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[1,300] 
        },
        Colour: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[1,50] 
        },
        Season: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[1,50] 
        },

    })
}