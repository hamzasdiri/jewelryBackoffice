const express = require('express');
const router = express.Router();
const expeditionController = require('../controllers/expeditionController');

/**
 * @swagger
 * tags:
 *   name: Expeditions
 *   description: API for managing expeditions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Expedition:
 *       type: object
 *       required:
 *         - nom
 *         - frais
 *       properties:
 *         _id:
 *           type: string  # 🔹 Changed to string (if using MongoDB)
 *           description: Unique identifier
 *         nom:
 *           type: string
 *           description: Shipping name
 *         frais:
 *           type: number
 *           description: Shipping cost
 */

/**
 * @swagger
 * /api/expeditions:
 *   get:
 *     summary: Get all expeditions
 *     tags: [Expeditions]
 *     responses:
 *       200:
 *         description: List of all expeditions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expedition'
 */
router.get('/', expeditionController.getAllExpeditions);

/**
 * @swagger
 * /api/expeditions/{id}:
 *   get:
 *     summary: Get an expedition by ID
 *     tags: [Expeditions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expedition
 *         schema:
 *           type: string  # 🔹 Changed to string for MongoDB compatibility
 *     responses:
 *       200:
 *         description: Expedition data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expedition'
 *       404:
 *         description: Expedition not found
 */
router.get('/:id', expeditionController.getExpeditionById);

/**
 * @swagger
 * /api/expeditions:
 *   post:
 *     summary: Create a new expedition
 *     tags: [Expeditions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expedition'
 *     responses:
 *       201:
 *         description: Expedition created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expedition'
 *       400:
 *         description: Invalid input data
 */
router.post('/', expeditionController.createExpedition);

/**
 * @swagger
 * /api/expeditions/{id}:
 *   put:
 *     summary: Update an expedition by ID
 *     tags: [Expeditions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expedition
 *         schema:
 *           type: string  # 🔹 Changed to string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expedition'
 *     responses:
 *       200:
 *         description: Expedition updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expedition'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Expedition not found
 */
router.put('/:id', expeditionController.updateExpedition);

/**
 * @swagger
 * /api/expeditions/{id}:
 *   delete:
 *     summary: Delete an expedition by ID
 *     tags: [Expeditions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expedition
 *         schema:
 *           type: string  # 🔹 Changed to string
 *     responses:
 *       204:
 *         description: Expedition deleted successfully
 *       404:
 *         description: Expedition not found
 */
router.delete('/:id', expeditionController.deleteExpedition);

module.exports = router;
