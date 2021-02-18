const express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
const plantaController = require('./controllers/PlantaController')
const riegoController = require('./controllers/RiegoController')
const medioCultivoController = require('./controllers/MedioCultivoController')
const geneticaController = require('./controllers/GeneticaController')
const app = express()
const port = 3000
app.use(cors());
app.use(bodyParser.json())

// Obtener Plantas y crear Plantas
app.route('/plantas')
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
app.route('/plantas/:id')
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

// Obtener Riegos de una planta y crear un riego relacionado a una planta
app.route('/:plantumId/riegos')
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
app.route('/:plantumId/riegos/:id')
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

app.route('/medios-cultivo')
    .get((req, res) => {
        medioCultivoController.obtenerMediosCultivo()
        .then(mediosCultivo => res.send(mediosCultivo))
        .catch(err => res.send(err))
    })
app.route('/geneticas')
    .get((req, res) => {
        geneticaController.obtenerGeneticas()
            .then(geneticas => res.send(geneticas))
            .catch(err => res.send(err))
    })
app.listen(process.env.PORT || port, () => {
    console.log(`Weed Stats Api Running !!`);
})