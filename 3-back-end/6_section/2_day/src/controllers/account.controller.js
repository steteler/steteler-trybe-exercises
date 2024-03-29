const services = require('../services/index');

async function getById(req, res) {
  const { lazyLoading } = req.query;
  const { id } = req.params;

  const accountById = await services.account.getById(id, lazyLoading);
  res.status(200).json(accountById);
}

module.exports = {
  getById,
};
