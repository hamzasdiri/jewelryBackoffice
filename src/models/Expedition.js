// src/models/Expedition.js
const mongoose = require('mongoose');

const expeditionSchema = new mongoose.Schema({
    nom: { type: String, required: true }, // Shipping name
    frais: { type: Number, required: true, min: 0 } // Shipping cost
  }, { timestamps: true });
  
  module.exports = mongoose.model('Expedition', expeditionSchema);
  