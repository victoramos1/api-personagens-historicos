const Personagem = require("../models/Personagens")

exports.porNac = (req, res) => {
  Personagem.findAll({
    where: {
      nacionalidade: req.params.nacionalidade
    }
  })
  .then(resultado => res.status(200).json(resultado))
  .catch(erro => res.status(404).json({ erro: 'Erro ao pesquisar por nacionalidade' }))
}