const mongoose = require('mongoose');

const supplierOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  fournisseur: { type: String, required: true }, // Supplier name or ID
  expedition: { type: String, required: true }, // Shipping method
  noteLivraison: { type: String }, // Delivery note
  modePaiment: { type: String, required: true }, // Payment method
  categories: [
    {
      category: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Category
        ref: 'Category',
        required: true,
      },
      articles: [
        {
          article: {
            type: mongoose.Schema.Types.ObjectId, // Reference to Article
            ref: 'Article',
            required: true,
          },
          quantity: { type: Number, required: true }, // Ordered quantity
        },
      ],
    },
  ],
  note: { type: String }, // Additional notes
}, { timestamps: true });

module.exports = mongoose.model('SupplierOrder', supplierOrderSchema);
