const services = require('../services/index');

async function getAllPatientsPlans(_req, res) {
  const patientsPlans = await services.getAllPatientsPlans();
  res.status(200).json({ patientsPlans });
}

async function getAllPatientsSurgeries(_req, res) {
  const patientsSurgeries = await services.getAllPatientsSurgeries();
  res.status(200).json({ patientsSurgeries });
}

async function getPlanById(req, res) {
  const { id } = req.params;

  const plan = await services.getPlanById(id);
  res.status(200).json({ plan });
}

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getPlanById,
};
