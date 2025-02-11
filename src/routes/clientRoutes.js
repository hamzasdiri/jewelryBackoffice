// src/routes/clientRoutes.js
const express = require('express');
const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
  getClientById
} = require('../controllers/clientController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clients  # ✅ Fixed incorrect tag (was "Expeditions")
 *   description: API for managing clients
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Fetch all clients
 *     description: Retrieves a list of all clients
 *     tags: [Clients]  # ✅ Added correct tag
 *     responses:
 *       200:
 *         description: A list of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */
router.get('/', getClients);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Add a new client
 *     description: Creates a new client with the provided details
 *     tags: [Clients]  # ✅ Added correct tag
 *     requestBody:
 *       description: Client object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Client created successfully
 *       400:
 *         description: Invalid input data
 */
router.post('/', addClient);

/**
 * @swagger
 * /api/clients/{clientId}:
 *   put:
 *     summary: Update an existing client
 *     description: Updates the client details based on the client ID
 *     tags: [Clients]  # ✅ Added correct tag
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The ID of the client to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated client data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Client updated successfully
 *       400:
 *         description: Invalid client ID or data
 *       404:
 *         description: Client not found
 */
router.put('/:clientId', updateClient);

/**
 * @swagger
 * /api/clients/{clientId}:
 *   delete:
 *     summary: Delete a client
 *     description: Deletes the client based on the client ID
 *     tags: [Clients]  # ✅ Added correct tag
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The ID of the client to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *       404:
 *         description: Client not found
 */
router.delete('/:clientId', deleteClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Get an client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the client
 *         schema:
 *           type: string  # 🔹 Changed to string for MongoDB compatibility
 *     responses:
 *       200:
 *         description: Client data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 */
router.get('/:id', getClientById);

module.exports = router;
