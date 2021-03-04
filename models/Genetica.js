module.exports = function (sequelize, DataTypes) {
    return sequelize.define('genetica', {
        nombre: DataTypes.STRING,
        tipo: DataTypes.STRING,
        variedad: DataTypes.STRING
    }, { modelName: 'genetica', paranoid: true })
}