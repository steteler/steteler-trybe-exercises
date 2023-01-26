const express = require('express');
const controllers = require('../controllers/index');

const patientRouter = express.Router();

patientRouter.get('/surgeries', controllers.getAllPatientsSurgeries);

patientRouter.get('/:id', controllers.getPlanById);

patientRouter.get('/', controllers.getAllPatientsPlans);

module.exports = patientRouter;
