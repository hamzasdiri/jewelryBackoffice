// src/routes/clientOrderRoutes.js
const express = require('express');
const {
  getClientOrders,
  getClientOrderById,
  createClientOrder,
  updateClientOrder,
  deleteClientOrder,
} = require('../controllers/clientOrderController');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Expeditions
 *   description: API for managing client orders
 */
/**
 * @swagger
 * /api/client-orders:
 *   get:
 *     summary: Fetch all client orders
 *     description: Retrieves a list of all client orders
 *     responses:
 *       200:
 *         description: A list of client orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClientOrder'
 */
router.get('/', getClientOrders);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   get:
 *     summary: Fetch a client order by ID
 *     description: Retrieves a specific client order using the provided order ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific client order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 *       404:
 *         description: Client order not found
 */
router.get('/:id', getClientOrderById);

/**
 * @swagger
 * /api/client-orders:
 *   post:
 *     summary: Add a new client order
 *     description: Creates a new client order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientOrder'
 *     responses:
 *       201:
 *         description: Client order successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 */
router.post('/', createClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   put:
 *     summary: Update an existing client order
 *     description: Updates an existing client order using the provided order ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientOrder'
 *     responses:
 *       200:
 *         description: Client order successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 *       404:
 *         description: Client order not found
 */
router.put('/:id', updateClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   delete:
 *     summary: Delete a client order by ID
 *     description: Deletes the specified client order by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client order successfully deleted
 *       404:
 *         description: Client order not found
 */
router.delete('/:id', deleteClientOrder);

module.exports = router;
