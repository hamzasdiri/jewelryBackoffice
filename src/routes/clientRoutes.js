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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 */
router.post('/', addClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Update an existing client
 *     description: Updates a client with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client to be updated
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Client object with updated fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Client updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 */
router.put('/:id', updateClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Delete a client
 *     description: Removes a client from the system
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the client to be deleted
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *       404:
 *         description: Client not found
 */
router.delete('/:id', deleteClient);

module.exports = router;
