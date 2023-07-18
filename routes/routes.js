const express = require("express")
const route = express.Router()
const retornoGeral = require("../controllers/retornoGeral")
const retornoPorID = require("../controllers/retornoPorID")
const retornoPorNac = require("../controllers/retornoPorNac")
const retornoPorOcup = require("../controllers/retornoPorOcup")
// const apagar = require("../controllers/apagar")
// const editar = require("../controllers/editar")
// const incluir = require("../controllers/incluir")

route.get("/personagens", retornoGeral.geral)

route.get("/personagens/:id", retornoPorID.porID)

route.get("/personagens/nacionalidade/:nacionalidade", retornoPorNac.porNac)

route.get("/personagens/ocupacao/:ocupacao", retornoPorOcup.porOcup)

// route.delete("/apagar/:id", apagar.apagar)

// route.put("/editar/:id", editar.editar)

// route.post("/incluir", incluir.incluir) 

module.exports = route