// src/routes/supplierOrderRoutes.js
const express = require('express');
const {
  getSupplierOrders,
  getSupplierOrderById,
  addSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOrder,
} = require('../controllers/supplierOrderController');

const router = express.Router();

// Get all supplier orders
router.get('/', getSupplierOrders);

// Get a specific supplier order by ID
router.get('/:id', getSupplierOrderById);

// Add a new supplier order
router.post('/', addSupplierOrder);

// Update an existing supplier order
router.patch('/:id', updateSupplierOrder);

// Delete a supplier order
router.delete('/:id', deleteSupplierOrder);

module.exports = router;
