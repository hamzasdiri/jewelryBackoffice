// src/routes/articleRoutes.js
const upload = require('../middlewares/upload');
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
router.post('/', upload.single('image'), addArticle);

// Update an existing article
router.put('/:id', upload.single('image'), updateArticle);

// Delete an article
router.delete('/:id', deleteArticle);

module.exports = router;
