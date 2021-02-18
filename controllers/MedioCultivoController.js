const { MedioCultivo } = require('../Models.js')

const medioCultivoController = {
    obtenerMediosCultivo: () => {
        return MedioCultivo.findAll({attributes:['id','tipo','medidas']})
    }
}
module.exports = medioCultivoController