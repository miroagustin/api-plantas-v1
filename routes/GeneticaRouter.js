var express = require('express');
var router = express.Router();
const geneticaController = require('../controllers/GeneticaController')

router.route('/geneticas')
    .get((req, res) => {
        geneticaController.obtenerGeneticas()
            .then(geneticas => res.send(geneticas))
            .catch(err => res.send(err))
    })

module.exports = router;