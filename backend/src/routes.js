const { Router } = require('express');

const CardController = require ('./app/controllers/CardController');

const routes = new Router();

routes.get('/', (request, response) => response.json({message: "Welcome to the NodeJS workshop! 🚀"}));
// routes.get('/cards', CardController.index);
// routes.post('/cards', CardController.create);
// routes.delete('/cards/:id', CardController.delete);

module.exports = routes;