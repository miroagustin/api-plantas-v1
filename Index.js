const express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json())
// Planta
app.use(require("./routes/PlantaRouter"))
// Riego
app.use(require("./routes/RiegoRouter"))
// Medio Cultivo
app.use(require("./routes/MedioCultivoRouter"))
// Genetica
app.use(require("./routes/GeneticaRouter"))
// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Weed Stats Api Running !! on port ` + port);
})