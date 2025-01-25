// src/routes/clientRoutes.js
const express = require('express');
const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} = require('../controllers/clientController');

const router = express.Router();

// Fetch all clients
router.get('/', getClients);

// Add a new client
router.post('/', addClient);

// Update an existing client
router.put('/:id', updateClient);

// Delete a client
router.delete('/:id', deleteClient);

module.exports = router;
