// src/models/Supplier.js
const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Supplier', SupplierSchema);
