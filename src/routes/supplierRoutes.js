// src/routes/supplierRoutes.js
const express = require('express');
const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/supplierController');

const router = express.Router();

// Fetch all suppliers
router.get('/', getSuppliers);

// Add a new supplier
router.post('/', addSupplier);

// Update an existing supplier
router.put('/:id', updateSupplier);

// Delete a supplier
router.delete('/:id', deleteSupplier);

module.exports = router;
