const { Account, Profile } = require('../models/index');

async function getById(id) {
  const accountById = await Account.findByPk(
    id,
    {
      include: [{ model: Profile, as: 'account_profile' }],
    },
  );
  return accountById;
}

module.exports = {
  getById,
};
