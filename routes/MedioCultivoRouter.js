var express = require('express');
var router = express.Router();
const medioCultivoController = require('../controllers/MedioCultivoController')

router.route('/medios-cultivo')
    .get((req, res) => {
        medioCultivoController.obtenerMediosCultivo()
        .then(mediosCultivo => res.send(mediosCultivo))
        .catch(err => res.send(err))
    })

module.exports = router;