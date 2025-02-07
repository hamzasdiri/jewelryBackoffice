// src/routes/clientRoutes.js
const express = require('express');
const {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} = require('../controllers/clientController');

const router = express.Router();

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Fetch all clients
 *     description: Retrieves a list of all clients
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

module.exports = router;
