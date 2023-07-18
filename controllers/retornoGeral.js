const Personagem = require("../models/Personagens")

exports.geral = (req, res) => {
  Personagem.findAll()
  .then(resultado => res.status(200).json(resultado))
  .catch(erro => res.status(404).json({ erro: 'Erro ao pesquisar personagens' }))
}