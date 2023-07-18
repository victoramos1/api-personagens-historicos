const express = require("express")
const app = express()
const routes = require("./routes/routes")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log("Servidor aberto na porta 3333")
})

