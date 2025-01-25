// src/models/SupplierOrder.js
const mongoose = require('mongoose');

const supplierOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  fournisseur: { type: String, required: true },
  expedition: { type: String, required: true },
  noteLivraison: { type: String },
  modePaiment: { type: String, required: true },
  categorie: { type: String, required: true },
  note: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('SupplierOrder', supplierOrderSchema);
