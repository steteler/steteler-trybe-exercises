module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          up_voting: 2,
          down_voting: 23,
          account_id: 1,
        },
        {
          message: 'Nada que vale a pena é fácil. Lembre-se disso',
          up_voting: 28,
          down_voting: 15,
          account_id: 1,
        },
        {
          message: 'Não é por que o céu esta nublado que as estrelas morrem',
          up_voting: 35,
          down_voting: 0,
          account_id: 2,
        },
        {
          message: 'Pudera eu, escolher o que sentir.',
          up_voting: 50,
          down_voting: 10,
          account_id: 3,
        },
        {
          message: 'Não posso voltar para ontem porque lá eu era outra pessoa',
          up_voting: 100,
          down_voting: 8,
          account_id: 4,
        },
        {
          message: 'Não se policie tanto, você pode acabar preso.',
          up_voting: 78,
          down_voting: 18,
          account_id: 4,
        },
        {
          message: 'A noite não é o fim do dia. É o começo do dia que vem.',
          up_voting: 82,
          down_voting: 6,
          account_id: 4,
        },
      ],
    );
  },

  async down(queryInterface, _) {
    return queryInterface.bulkDelete('comments', null, {});
  },
};
