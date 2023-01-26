const { Patient, Plan, Surgery } = require('../models/index');

require('dotenv').config();

async function getAllPatientsPlans() {
  const patientsPlans = await Patient.findAll();

  return patientsPlans;
}

async function getAllPatientsSurgeries() {
  const patientsPlans = await Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
    },
  });

  return patientsPlans;
}

async function getPlanById(id) {
  const plan = await Plan.findAll({
    where: { id },
    include: { model: Patient, as: 'patients' },
  });

  return plan;
}

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getPlanById,
};
