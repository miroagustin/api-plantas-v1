const { Genetica } = require('../Models.js')

const geneticaController = {
    obtenerGeneticas: () => {
        return Genetica.findAll({attributes:['id','nombre','tipo','variedad']})
    }

}
module.exports = geneticaController