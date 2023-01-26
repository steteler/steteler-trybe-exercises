module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'patients',
    [
      {
        fullname: 'Alberto Dos Santos',
        plan_id: 1,
      }, {
        fullname: 'Maria Silveira Rodrigues',
        plan_id: 3,
      },
      {
        fullname: 'Osvaldo de Andrade',
        plan_id: 3,
      },
      {
        fullname: 'Cristiano Ronaldo Messi',
        plan_id: 2,
      },
      {
        fullname: 'Luis Carlos Suarez',
        plan_id: 3,
      },
    ],
    {},
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('patients', null, {}),
};
