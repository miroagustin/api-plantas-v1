var express = require('express');
var router = express.Router();
const plantaController = require('../controllers/PlantaController')
// Obtener Plantas y crear Plantas
router.route('/plantas')
    .get((req, res) => {
        plantaController.obtenerPlantas()
            .then(plantas => res.send(plantas))
            .catch(error => res.send(error))
    })
    .post((req, res) => {
        var obj = req.body;
        plantaController.crearPlanta(obj)
            .then(planta => res.send(planta))
            .catch(error => res.send(error))
    })

// Obtener una planta y Updatear una planta
router.route('/plantas/:id')
    .get((req, res) => {
        var id = req.params.id;
        plantaController.obtenerPlanta(id)
            .then(planta => res.send(planta))
            .catch(err => res.send(err))
    })
    .post((req, res) => {
        var id = req.params.id;
        plantaController.modificarPlanta(id, req.body)
            .then(rows => res.send(rows > 0 ? "OK" : "NO CAMBIO"))
            .catch(err => res.send(err))
    })
    .delete((req, res) => {
        var id = req.params.id;
        plantaController.borrarPlanta(id)
            .then(rows => res.send(rows > 0 ? "OK" : "NO CAMBIO"))
            .catch(error => res.send(error))
    })
module.exports = router;