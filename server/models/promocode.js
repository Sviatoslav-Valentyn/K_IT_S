module.exports = (sequelize, DataTypes) => {
    const promos = sequelize.define("promocode", {
        ID_Promo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Promocode: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        
    },{
        timestamps: false
      })
      return promos;
}