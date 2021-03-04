module.exports = function (sequelize, DataTypes) {
    return sequelize.define('planta', {
        nombre: DataTypes.STRING,
        etapa: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        origen: DataTypes.STRING
    }, { modelName: 'planta', paranoid: true })
}