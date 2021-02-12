const { Riego } = require('./Models.js')
const riegoController = {
    obtenerRiegos: (plantumId) => {
        return Riego.findAll({
            where: { plantumId: plantumId },
            attributes: ['fecha', 'cantRiego', 'nutriente']
        })
    },
    obtenerRiego: (plantumId, id) => {
        return Riego.findOne({
            where: { id: id, plantumId: plantumId },
            attributes: ['fecha', 'cantRiego', 'nutriente']
        })
    },
    crearRiego: (reqBody) => {
        return Riego.create(reqBody)
    },
    updateRiego: (plantumId, id, reqBody) => {
        return Riego.update(
            reqBody,
            {
                where: { id: id, plantumId: plantumId }
            })
    }
}
module.exports = riegoController