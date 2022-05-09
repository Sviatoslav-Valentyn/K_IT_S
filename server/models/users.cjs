module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        ID_User: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            length: [1, 40]
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            length: [8,45]
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            unique: true,
            length:[5,100] 
        },
        PhoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            length: [0,9] 
        }
    })
}