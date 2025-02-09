// src/models/Expedition.js
const mongoose = require('mongoose');

const expeditionSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, // Custom numeric ID
    nom: { type: String, required: true }, // Shipping name
    frais: { type: Number, required: true, min: 0 } // Shipping cost
  }, { timestamps: true });
  
  module.exports = mongoose.model('Expedition', expeditionSchema);
  