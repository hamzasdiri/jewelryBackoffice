// src/controllers/articleController.js
const Article = require('../models/Article');

// Fetch all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch articles', error });
  }
};

// Fetch an article by ID
const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch article', error });
  }
};


// Add a new article
const addArticle = async (req, res) => {
  try {
    const { code, designation, description, quantity, price, category } = req.body;

    const article = new Article({
      code,
      designation,
      description,
      quantity,
      price,
      category,
      image: req.file ? `/uploads/${req.file.filename}` : null, // Save the image path
    });

    await article.save();

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add article', error });
  }
};
// Update an article
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, designation, description, quantity, price, category } = req.body;

    const updatedFields = {
      code,
      designation,
      description,
      quantity,
      price,
      category,
    };

    if (req.file) {
      updatedFields.image = `/uploads/${req.file.filename}`; // Update image if provided
    }

    const updatedArticle = await Article.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update article', error });
  }
};

// Delete an article
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArticle = await Article.findByIdAndDelete(id);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete article', error });
  }
};

module.exports = {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
