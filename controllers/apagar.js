const Personagem = require("../models/Personagens")

exports.apagar = (req, res) => {
  Personagem.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.status(200).json({ message: `Personagem com ID ${req.params.id} foi excluído com sucesso.` }))
    .catch(erro => res.status(404).json({ erro: 'O usuário não foi apagado' }))
}