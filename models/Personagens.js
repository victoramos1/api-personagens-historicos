const Sequelize = require("sequelize")
const database = require("../database/db")

const Personagem = database.define('Personagens', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ocupacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nacionalidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nascimento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  falecimento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

module.exports = Personagem