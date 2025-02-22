// src/models/Category.js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
