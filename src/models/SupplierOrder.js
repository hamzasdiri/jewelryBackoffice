const mongoose = require('mongoose');

const supplierOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  fournisseur: { type: String, required: true }, // Supplier name or ID
  expedition: { type: String, required: true }, // Shipping method
  noteLivraison: { type: String }, // Delivery note
  modePaiment: { type: String, required: true }, // Payment method
  codeSuivi: { type: String, required: true },
  codeArticle: { type: String, required: true },
  quantite: { type: Number, required: true },
  prix: { type: Number, required: true },
  total: { type: Number, required: true },
  note: { type: String }, // Additional notes
}, { timestamps: true });

module.exports = mongoose.model('SupplierOrder', supplierOrderSchema);
