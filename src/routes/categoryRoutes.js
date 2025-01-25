// src/routes/categoryRoutes.js
const express = require('express');
const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

// Fetch all categories
router.get('/', getCategories);

// Add a new category
router.post('/', addCategory);

// Update an existing category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;
