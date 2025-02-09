const mongoose = require('mongoose');

const clientOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  client: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client', 
    required: true 
  },
  expedition: { 
    type: mongoose.Schema.Types.Mixed, // Can be an ObjectId or an embedded object
    required: true
  },  
  noteLivraison: { type: String },
  modePaiment: { type: String, required: true },
  codeSuivi: { type: String },
  articles: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Article
        ref: 'Article',
        required: true,
      },
      quantity: { type: Number, required: true }, // Quantity of this article in the order
    },
  ],
  etatCommande: { type: String, required: true },
  freeShipping: { type: Boolean, default: false }, // New field
  total: { type: Number, required: true, min: 0 }, // New field
}, { timestamps: true });

module.exports = mongoose.model('ClientOrder', clientOrderSchema);
