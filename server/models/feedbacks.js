module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("feedback", {
        ID_Feedback: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Comment: {
            type: DataTypes.STRING(350),
            allowNull: false,
            length:[1,350]
        },
        
    },{
        timestamps: false
      })
      return products;
}