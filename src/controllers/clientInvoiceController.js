// src/controllers/clientInvoiceController.js
const ClientInvoice = require('../models/ClientInvoice');

const getClientInvoice = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Find the invoice based on the orderId
    const invoice = await ClientInvoice.findOne({ orderId })
      .populate('orderId', 'codeCommande client dateCommande')
      .populate('products.productId', 'designation');

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch invoice', error });
  }
};

module.exports = { getClientInvoice };
