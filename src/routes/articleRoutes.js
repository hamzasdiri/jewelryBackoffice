const upload = require('../middlewares/upload');
const express = require('express');
const {
  getArticles,
  addArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

const router = express.Router();

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Fetch all articles
 *     description: Retrieves a list of all articles
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
router.get('/', getArticles);

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Add a new article
 *     description: Creates a new article with the provided details
 *     requestBody:
 *       description: Article object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Article created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 */
router.post('/', upload.single('image'), addArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update an existing article
 *     description: Updates an article with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the article to be updated
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Article object with updated fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Article updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
router.put('/:id', upload.single('image'), updateArticle);

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete an article
 *     description: Removes an article from the system
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the article to be deleted
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article deleted successfully
 *       404:
 *         description: Article not found
 */
router.delete('/:id', deleteArticle);

module.exports = router;
