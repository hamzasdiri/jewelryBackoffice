// src/routes/clientInvoiceRoutes.js
const express = require('express');
const { getClientInvoice } = require('../controllers/clientInvoiceController');

const router = express.Router();

/**
 * @swagger
 * /api/client-invoices/{orderId}:
 *   get:
 *     summary: Fetch client invoice by order ID
 *     description: Retrieves the client invoice associated with the specified order ID
 *     parameters:
 *       - name: orderId
 *         in: path
 *         description: The ID of the order to fetch the invoice for
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The client invoice for the specified order
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientInvoice'
 *       404:
 *         description: Invoice for the given order ID not found
 */
router.get('/:orderId', getClientInvoice);

module.exports = router;
