// src/routes/articleRoutes.js
const express = require('express');
const {
  getArticles,
  addArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

const router = express.Router();

// Fetch all articles
router.get('/', getArticles);

// Add a new article
router.post('/', addArticle);

// Update an existing article
router.put('/:id', updateArticle);

// Delete an article
router.delete('/:id', deleteArticle);

module.exports = router;
