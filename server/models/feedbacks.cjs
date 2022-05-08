module.exports = (sequelize, DataTypes) => {
    return sequelize.define("feedback", {
        ID_Feedback: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Comment: {
            type: DataTypes.STRING,
            allowNull: false,
            length:[1,350]
        },
        
    })
}