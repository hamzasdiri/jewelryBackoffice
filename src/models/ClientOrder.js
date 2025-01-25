// src/models/ClientOrder.js
const mongoose = require('mongoose');

const clientOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  client: { type: String, required: true },
  expedition: { type: String, required: true },
  noteLivraison: { type: String },
  modePaiment: { type: String, required: true },
  codeSuivi: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('ClientOrder', clientOrderSchema);
