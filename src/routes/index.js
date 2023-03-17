const { Router } = require('express');
const routes = Router();
const task1Route = require("./task1Route");

routes.use('/', task1Route);
module.exports = routes;
