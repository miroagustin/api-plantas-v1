const { Genetica } = require('../Models.js')

const geneticaController = {
    obtenerGeneticas: () => {
        return Genetica.findAll({attribute:['id','nombre','tipo','variedad']})
    }

}
module.exports = geneticaController