// Routes Imports
const express = require('express');
const routes = express.Router();

// Controllers Imports
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Sessions Routes
routes.post('/session', SessionController.store);

// Ongs Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

// Profiles Routes
routes.get('/profile', ProfileController.index);

// Incidents Routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;