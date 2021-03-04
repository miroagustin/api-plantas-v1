const { Sequelize, DataTypes } = require('sequelize');
var config = !process.env.JAWSDB_MARIA_URL && require("./config.json")
const sequelize = new Sequelize(process.env.JAWSDB_MARIA_URL || config.connString);

// Importamos los modelos
const Planta = require('./models/Planta')(sequelize, DataTypes)
const MedioCultivo = require('./models/MedioCultivo')(sequelize, DataTypes)
const Genetica = require('./models/Genetica')(sequelize, DataTypes)
const Riego = require('./models/Riego')(sequelize, DataTypes)

// Establecemos relaciones
Planta.MedioCultivo = Planta.belongsTo(MedioCultivo, { foreignKey: { allowNull: false } })
Planta.Genetica = Planta.belongsTo(Genetica, { foreignKey: { allowNull: false } })
Planta.Riegos = Planta.hasMany(Riego)
Riego.Planta = Riego.belongsTo(Planta, { foreignKey: { allowNull: false } })

// Sincronizamos con la base de datos
sequelize.sync()
  .then(() => {
    console.log(`Database & tables sync!`);
  })
module.exports = {
  Planta,
  MedioCultivo,
  Genetica,
  Riego
}