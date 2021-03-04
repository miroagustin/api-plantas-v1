module.exports = function (sequelize, DataTypes) {
    return sequelize.define('riego', {
        fecha: DataTypes.DATE,
        cantRiego: DataTypes.INTEGER,
        nutriente: DataTypes.STRING
      }, { modelName: 'riego', paranoid: true })
}