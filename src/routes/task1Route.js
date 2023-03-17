// import logger from '@utils/logger';
const { Router } = require('express');
const task1Route = Router();
const { task1 } = require('../controllers/task1');

task1Route.get('/task-1', (req, res) => {
  const response = task1(req);
  return res.status(response.code).send(response.data);
});

module.exports =task1Route;
