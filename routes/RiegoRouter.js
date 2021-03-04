var express = require('express');
var router = express.Router();
const riegoController = require('../controllers/RiegoController')
// Obtener Riegos de una planta y crear un riego relacionado a una planta
router.route('/:plantumId/riegos')
    .get((req, res) => {
        var id = req.params.plantumId;
        riegoController.obtenerRiegos(id)
            .then(riegos => res.send(riegos))
            .catch(err => res.send(err))
    })
    .post((req, res) => {
        var id = req.params.plantumId;
        req.body.plantumId = id;
        riegoController.crearRiego(req.body)
            .then(riego => res.send(riego))
            .catch(err => res.send(err))
    })

// Obtener un solo riego y updatear un riego
router.route('/:plantumId/riegos/:id')
    .get((req, res) => {
        var plantumId = req.params.plantumId;
        var id = req.params.id
        riegoController.obtenerRiego(plantumId, id)
            .then(riego => res.send(riego))
            .catch(err => res.send(err))
    })
    .post((req, res) => {
        var plantumId = req.params.plantumId;
        var id = req.params.id
        riegoController.updateRiego(plantumId, id, req.body)
            .then(rows => res.send(rows > 0 ? "OK" : "NO CAMBIO"))
            .catch(err => res.send(err))
    })
module.exports = router;