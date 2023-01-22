const services = require('../services');

async function getById(req, res) {
  const { id } = req.params;
  const accountById = await services.account.getById(id);
  res.status(200).json(accountById);
}

module.exports = {
  getById,
};
