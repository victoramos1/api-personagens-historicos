const Personagem = require("../models/Personagens")

exports.porID = (req, res) => {
  Personagem.findByPk(req.params.id)
  .then(resultado => res.status(200).json(resultado))
  .catch(erro => res.status(404).json({ erro: 'O personagem não foi encontrado' }))
}

