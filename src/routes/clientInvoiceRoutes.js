// src/routes/clientInvoiceRoutes.js
const express = require('express');
const { getClientInvoice } = require('../controllers/clientInvoiceController');

const router = express.Router();

// Route to fetch invoice by order ID
router.get('/:orderId', getClientInvoice);

module.exports = router;
