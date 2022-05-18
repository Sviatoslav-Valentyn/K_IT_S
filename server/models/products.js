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
        Category: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Price: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        Colour: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Size: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Descryption: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        Composition: {
            type: DataTypes.STRING(200),
            allowNull: false
        },

    },{
        timestamps: false
      })
      return products;
}