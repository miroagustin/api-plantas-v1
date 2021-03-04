module.exports = function (sequelize, DataTypes) {
    return sequelize.define('medioCultivo', {
        tipo: DataTypes.STRING,
        medidas: DataTypes.INTEGER
    }, { modelName: 'medioCultivo', paranoid: true })
}