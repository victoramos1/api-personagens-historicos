const Personagem = require("../models/Personagens");

exports.editar = (req, res) => {

  Personagem.findByPk(req.params.id)
    .then(personagem => {
      if (!personagem) {
        return res.status(404).send('Personagem não encontrado.')
      }

      personagem.nome = req.body.nome
      personagem.ocupacao = req.body.ocupacao
      personagem.nacionalidade = req.body.nacionalidade

      return personagem.save();
    })
    .then(resultado => res.status(200).json({ message: `Personagem com ID ${req.params.id} foi atualizado com sucesso.` }))
    .catch(erro => res.status(404).json({ erro: 'O usuário não foi editado' }))
};
