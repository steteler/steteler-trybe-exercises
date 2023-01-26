module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'surgeries',
    [
      {
        specialty: 'Apendicectomia',
        doctor: 'Rey Dos Santos',
      },
      {
        specialty: 'Cistectomia',
        doctor: 'Marcos Afonso',
      },

      {
        specialty: 'Colecistectomia',
        doctor: 'Iuri Solto',
      },
      {
        specialty: 'Craniectomia',
        doctor: 'Marilene Tobias',
      },
      {
        specialty: 'Gastrorrafia',
        doctor: 'Joana Machado',
      },
      {
        specialty: 'Herniorrafia',
        doctor: 'Lincoln Mathias',
      },
      {
        specialty: 'Hisperopexia',
        doctor: 'Alessandra Martins',
      },
      {
        specialty: 'Cistoscopia',
        doctor: 'Adailton Rodrigues',
      },
    ],
    {},
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('surgeries', null, {}),
};
