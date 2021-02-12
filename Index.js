const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
const { Planta, MedioCultivo, Genetica, Riego } = require('./Models.js')


app.get('/plantas', (req, res) => {
    Planta.findAll({
        include: [{ model: MedioCultivo, attributes: ['tipo', 'medidas'] }, { model: Genetica, attributes: ['nombre', 'tipo', 'variedad'] }],
        attributes: ['id', 'nombre', 'etapa', 'fechaNacimiento', 'origen']
    }).then(plantas => res.send(plantas),
        error => res.send(error))
})
app.post('/plantas', (req, res) => {
    var obj = req.body;
    console.log(obj)
    Planta.create(
        req.body,
        {
            include: [Planta.MedioCultivo, Planta.Genetica]
        })
        .then(planta => res.send(planta),
            error => res.send(error))
})
app.get('/plantas/:id', (req, res) => {
    var id = req.params.id;
    Planta.findOne(
        {
            where: { id: id },
            include: [
                { model: MedioCultivo, attributes: ['tipo', 'medidas'] },
                { model: Genetica, attributes: ['nombre', 'tipo', 'variedad'] },
                { model: Riego, attributes: ['fecha','cantRiego','nutriente']}],
            attributes: ['id', 'nombre', 'etapa', 'fechaNacimiento', 'origen']
        }).then(planta => res.send(planta))
        .catch(err => res.send(err))
})
app.post('/plantas/:id', (req, res) => {
    var id = req.params.id;
    Planta.update(
        req.body,
        { where: { id: id } }
    ).then((rows) => res.send(rows > 0 ? "OK" : "NO CAMBIO"))
        .catch((err) => res.send(err))
})
app.get('/:plantumId/riegos', (req, res) => {
    var id = req.params.plantumId;
    Riego.findAll({ where: { plantumId: id }, attributes: ['fecha', 'cantRiego', 'nutriente'] }).then((riegos) => res.send(riegos))
        .catch((err) => res.send(err))
})
app.post('/:plantumId/riegos', (req, res) => {
    var id = req.params.plantumId;
    req.body.plantumId = id;
    Riego.create(
        req.body
    ).then((riego) => res.send(riego))
        .catch(err => res.send(err))
})
app.post('/:plantumId/riegos/:id', (req, res) => {
    var plantumId = req.params.plantumId;
    var id = req.params.id
    Riego.update(
        req.body,
        { where: { id: id, plantumId: plantumId } }
    ).then((rows) => res.send(rows > 0 ? "OK" : "NO CAMBIO"))
        .catch(err => res.send(err))
})

app.listen(process.env.PORT || port, () => {
    console.log(`Weed Stats Api Running on http://localhost:${port}`)
})