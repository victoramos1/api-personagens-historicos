'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Personagens', {
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
  });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Personagens');
  }
};
