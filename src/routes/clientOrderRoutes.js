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
 *   name: ClientOrders
 *   description: API for managing client orders
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ClientOrder:
 *       type: object
 *       required:
 *         - codeCommande
 *         - dateCommande
 *         - client
 *         - modePaiment
 *         - articles
 *         - etatCommande
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the client order
 *         codeCommande:
 *           type: string
 *           description: Unique order code
 *         dateCommande:
 *           type: string
 *           format: date
 *           description: Date of the order
 *         client:
 *           type: string
 *           description: Reference to the client ID
 *         expedition:
 *           type: string
 *           nullable: true
 *           description: Reference to the expedition ID (if applicable)
 *         noteLivraison:
 *           type: string
 *           description: Delivery note
 *         modePaiment:
 *           type: string
 *           description: Payment method
 *         codeSuivi:
 *           type: string
 *           description: Tracking code (if applicable)
 *         articles:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - article
 *               - quantity
 *             properties:
 *               article:
 *                 type: string
 *                 description: Reference to the article ID
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the article in the order
 *         etatCommande:
 *           type: string
 *           description: Status of the order
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was last updated
 */

/**
 * @swagger
 * /api/client-orders:
 *   get:
 *     summary: Fetch all client orders
 *     tags: [ClientOrders]
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
 *     summary: Get a specific client order by ID
 *     tags: [ClientOrders]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client order details
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
 *     summary: Create a new client order
 *     tags: [ClientOrders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientOrder'
 *     responses:
 *       201:
 *         description: Client order successfully created
 *       400:
 *         description: Invalid data provided
 */
router.post('/', createClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   put:
 *     summary: Update an existing client order
 *     tags: [ClientOrders]
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
 *       404:
 *         description: Client order not found
 *       400:
 *         description: Invalid data provided
 */
router.put('/:id', updateClientOrder);

/**
 * @swagger
 * /api/client-orders/{id}:
 *   delete:
 *     summary: Delete a client order
 *     tags: [ClientOrders]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client order to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Client order successfully deleted
 *       404:
 *         description: Client order not found
 */
router.delete('/:id', deleteClientOrder);

module.exports = router;
