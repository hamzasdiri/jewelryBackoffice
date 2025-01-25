// src/routes/clientOrderRoutes.js
const express = require('express');
const {
  getClientOrders,
  getClientOrderById,
  addClientOrder,
  updateClientOrder,
  deleteClientOrder,
} = require('../controllers/clientOrderController');

const router = express.Router();

// Get all client orders
router.get('/', getClientOrders);

// Get a specific client order by ID
router.get('/:id', getClientOrderById);

// Add a new client order
router.post('/', addClientOrder);

// Update an existing client order
router.patch('/:id', updateClientOrder);

// Delete a client order
router.delete('/:id', deleteClientOrder);

module.exports = router;
