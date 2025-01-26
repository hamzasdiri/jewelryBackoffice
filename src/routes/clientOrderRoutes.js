// src/routes/clientOrderRoutes.js
const express = require('express');
const {
  getClientOrders,
  getClientOrderById,
  addClientOrder,
  updateClientOrder,
  deleteClientOrder,
} = require('../controllers/clientOrderController');

const router = express.Router();

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
 *         description: The client order for the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 *       404:
 *         description: Client order not found for the given ID
 */
router.get('/:id', getClientOrderById);

/**
 * @swagger
 * /api/client-orders:
 *   post:
 *     summary: Add a new client order
 *     description: Creates a new client order with the provided details
 *     requestBody:
 *       description: Client order object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientOrder'
 *     responses:
 *       201:
 *         description: Client order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 */
router.post('/', addClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   patch:
 *     summary: Update an existing client order
 *     description: Updates a specific client order using the provided ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Client order object with updated fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientOrder'
 *     responses:
 *       200:
 *         description: Client order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientOrder'
 *       404:
 *         description: Client order not found for the given ID
 */
router.patch('/:id', updateClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   delete:
 *     summary: Delete a client order
 *     description: Removes a specific client order using the provided ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client order deleted successfully
 *       404:
 *         description: Client order not found for the given ID
 */
router.delete('/:id', deleteClientOrder);

module.exports = router;
