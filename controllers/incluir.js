const Personagem = require("../models/Personagens")

exports.incluir = (req, res) => {
  Personagem.create({
    nome: req.body.nome,
    ocupacao: req.body.ocupacao,
    nacionalidade: req.body.nacionalidade,
    nascimento: req.body.nascimento,
    falecimento: req.body.falecimento
  })
    .then(() => res.status(201).json({ message: "Personagem incluído com sucesso" }))
    .catch((erro) => res.status(404).json({ erro: 'O usuário não foi cadastrado' }))
}
