'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date()
    await queryInterface.bulkInsert('Personagens', [
      { nome: "Leonardo da Vinci", ocupacao: "Inventor", nacionalidade: "Itália", nascimento: "1452", falecimento: "1529", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Cleópatra", ocupacao: "Governante", nacionalidade: "Egito", nascimento: "69 a.C.", falecimento: "30 a.C.", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Vincent Van Gogh", ocupacao: "Pintor", nacionalidade: "Holanda", nascimento: "1853", falecimento: "1890", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Nefertiti", ocupacao: "Governante", nacionalidade: "Egito", nascimento: "1370 a.C.", falecimento: "1330 a.C.", createdAt: currentDate, updatedAt: currentDate },
      { nome: "William Shakespeare", ocupacao: "Poeta", nacionalidade: "Inglaterra", nascimento: "1564", falecimento: "1616", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Ludwig van Beethoven", ocupacao: "Compositor", nacionalidade: "Alemanha", nascimento: "1770", falecimento: "1827", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Dante Alighieri", ocupacao: "Poeta", nacionalidade: "Itália", nascimento: "1265", falecimento: "1321", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Michelangelo", ocupacao: "Pintor", nacionalidade: "Itália", nascimento: "1475", falecimento: "1564", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Napoleão Bonaparte", ocupacao: "Governante", nacionalidade: "França", nascimento: "1769", falecimento: "1821", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Wolfgang Mozart", ocupacao: "Compositor", nacionalidade: "Áustria", nascimento: "1756", falecimento: "1791", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Thomas Edison", ocupacao: "Inventor", nacionalidade: "Estados Unidos", nascimento: "1847", falecimento: "1931", createdAt: currentDate, updatedAt: currentDate },
      { nome: "Júlio César", ocupacao: "Governante", nacionalidade: "Itália", nascimento: "100 a.C.", falecimento: "44 a.C.", createdAt: currentDate, updatedAt: currentDate },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personagens', null, {});
  }
};
