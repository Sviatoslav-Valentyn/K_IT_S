module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        ID_User: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            length: [1, 50]
        },
        Password: {
            type: DataTypes.STRING(45),
            allowNull: false,
            required: true,
            length: [8,45]
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true,
            unique: true,
            length:[5,100] 
        },
        PhoneNumber: {
            type: DataTypes.INTEGER(9),
            allowNull: false,
            unique: true,
            length: [0,9] 
        }
    },{
        timestamps: false
      })
      return users;
}