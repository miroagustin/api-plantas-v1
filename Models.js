const { Sequelize, Model, DataTypes } = require('sequelize');
if (!process.env.JAWSDB_MARIA_URL)
  var config = require("./config.json")
const sequelize = process.env.JAWSDB_MARIA_URL ? new Sequelize(process.env.JAWSDB_MARIA_URL)
  : new Sequelize(config.connString);

class MedioCultivo extends Model { }
MedioCultivo.init({
  tipo: DataTypes.STRING,
  medidas: DataTypes.INTEGER
}, { sequelize, modelName: 'medioCultivo', paranoid: true })

class Genetica extends Model { }
Genetica.init({
  nombre: DataTypes.STRING,
  tipo: DataTypes.STRING,
  variedad: DataTypes.STRING
}, { sequelize, modelName: 'genetica', paranoid: true })

class Riego extends Model { }
Riego.init({
  fecha: DataTypes.DATE,
  cantRiego: DataTypes.INTEGER,
  nutriente: DataTypes.STRING
}, { sequelize, modelName: 'riego', paranoid: true })

class Planta extends Model { }
Planta.init({
  nombre: DataTypes.STRING,
  etapa: DataTypes.STRING,
  fechaNacimiento: DataTypes.DATE,
  origen: DataTypes.STRING,
}, { sequelize, modelName: 'planta', paranoid: true })

Planta.MedioCultivo = Planta.belongsTo(MedioCultivo, { foreignKey: { allowNull: false } })
Planta.Genetica = Planta.belongsTo(Genetica, { foreignKey: { allowNull: false } })
Planta.Riegos = Planta.hasMany(Riego)

Riego.Planta = Riego.belongsTo(Planta, { foreignKey: { allowNull: false } })


sequelize.sync()
  .then(() => {
    console.log(`Database & tables sync!`)
  })
module.exports = {
  Planta,
  MedioCultivo,
  Genetica,
  Riego
}