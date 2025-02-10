// src/models/Client.js
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
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
  url: {
    type: String
  },
  phone: {
    type: String,
    required: true,
  },
  address1: {
    type: String
  },
  address2: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String  },
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
