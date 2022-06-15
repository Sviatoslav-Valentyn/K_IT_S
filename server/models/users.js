module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        ID_User: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true,
            unique: true
        },
        PhoneNumber: {
            type: DataTypes.INTEGER(9),
            allowNull: false,
            unique: true
        }
    },{
        timestamps: false
      })
      return users;
}