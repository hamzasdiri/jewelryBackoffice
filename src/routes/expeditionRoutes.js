const express = require('express');
const router = express.Router();
const expeditionController = require('../controllers/expeditionController');

/**
 * @swagger
 * /api/expeditions:
 *   get:
 *     summary: Get all expeditions
 *     tags: [Expeditions]
 *     responses:
 *       200:
 *         description: List of all expeditions
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
 *         description: Numeric ID of the expedition
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Expedition data
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
 *             type: object
 *             required:
 *               - _id
 *               - nom
 *               - frais
 *             properties:
 *               _id:
 *                 type: integer
 *                 description: Unique numeric ID
 *               nom:
 *                 type: string
 *                 description: Shipping name
 *               frais:
 *                 type: number
 *                 description: Shipping cost
 *     responses:
 *       201:
 *         description: Expedition created successfully
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
 *         description: Numeric ID of the expedition
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Shipping name
 *               frais:
 *                 type: number
 *                 description: Shipping cost
 *     responses:
 *       200:
 *         description: Expedition updated successfully
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
 *         description: Numeric ID of the expedition
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Expedition deleted successfully
 *       404:
 *         description: Expedition not found
 */
router.delete('/:id', expeditionController.deleteExpedition);

module.exports = router;
