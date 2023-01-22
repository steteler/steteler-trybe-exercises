const { Account, Profile } = require('../models/index');

async function getById(id, lazyLoading) {
  // lazy loading
  if (lazyLoading === 'true') {
    const accountById = await Account.findByPk(id);

    return { ...accountById.dataValues };
  }

  // eager loading
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
