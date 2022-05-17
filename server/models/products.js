module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("product", {
        ID_Product: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Photo: {
            type: DataTypes.BLOB('long')
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Price: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        Sex: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        Country: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        Components: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        Colour: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Season: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

    },{
        timestamps: false
      })
      return products;
}