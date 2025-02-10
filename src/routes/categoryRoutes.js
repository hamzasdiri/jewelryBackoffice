const express = require('express');
const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Categories  # 🔹 Fixed Typo ("Catgeries" -> "Categories")
 *     description: API for managing Categories
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Fetch all categories
 *     description: Retrieves a list of all categories
 *     tags: [Categories]  # 🔹 Added this
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', getCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Add a new category
 *     description: Creates a new category with the provided details
 *     tags: [Categories]  # 🔹 Added this
 *     requestBody:
 *       description: Category object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.post('/', addCategory);

/**
 * @swagger
 * /api/categories/{code}:
 *   put:
 *     summary: Update an existing category
 *     description: Updates the category with the specified code
 *     tags: [Categories]  # 🔹 Added this
 *     parameters:
 *       - name: code
 *         in: path
 *         description: The unique identifier of the category to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Category object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 */
router.put('/:code', updateCategory);

/**
 * @swagger
 * /api/categories/{code}:
 *   delete:
 *     summary: Delete a category
 *     description: Deletes the category with the specified code
 *     tags: [Categories]  # 🔹 Added this
 *     parameters:
 *       - name: code
 *         in: path
 *         description: The unique identifier of the category to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete('/:code', deleteCategory);

module.exports = router;
