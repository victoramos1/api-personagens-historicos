const Personagem = require("../models/Personagens")

exports.porOcup = (req, res) => {
  Personagem.findAll({
    where: {
      ocupacao: req.params.ocupacao
    }
  })
  .then(resultado => res.status(200).json(resultado))
  .catch(erro => res.status(404).json({ erro: 'Erro ao pesquisar por Ocupação' }))
}