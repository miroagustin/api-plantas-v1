const { Planta, MedioCultivo, Genetica, Riego } = require('../Models.js')

const plantaController = {
    obtenerPlantas: () => {
        return Planta.findAll({
            include: [
                { model: MedioCultivo, attributes: ['tipo', 'medidas'] },
                { model: Genetica, attributes: ['nombre', 'tipo', 'variedad'] }
            ],
            attributes: ['id', 'nombre', 'etapa', 'fechaNacimiento', 'origen']
        })
    },
    obtenerPlanta: (id) => {
        return Planta.findOne(
            {
                where: { id: id },
                include: [
                    { model: MedioCultivo, attributes: ['tipo', 'medidas'] },
                    { model: Genetica, attributes: ['nombre', 'tipo', 'variedad'] },
                    { model: Riego, attributes: ['fecha', 'cantRiego', 'nutriente'] }],
                attributes: ['id', 'nombre', 'etapa', 'fechaNacimiento', 'origen']
            })
    },
    crearPlanta: (bodyRequest) => {
        return Planta.create(
            bodyRequest,
            {
                include: [MedioCultivo, Genetica]
            })
    },
    modificarPlanta: (id, bodyRequest) => {
        return Planta.update(
            bodyRequest,
            { where: { id: id } }
        )
    },
    borrarPlanta: (id) => {
        return Planta.destroy({ where: { id: id } });
    }
}
module.exports = plantaController