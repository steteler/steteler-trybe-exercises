const express = require('express');
const activities = require('./data/activities');

const app = express();

app.get('/myActivities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const selectedActivity = activities.find((activity) => activity.id === Number(id));
  res.status(200).json(selectedActivity);
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const filteredActivities = activities.filter((activity) => activity.status === status);
  res.status(200).json(filteredActivities);
});

module.exports = app;
