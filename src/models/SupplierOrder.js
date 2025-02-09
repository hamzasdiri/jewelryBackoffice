const mongoose = require('mongoose');

const supplierOrderSchema = new mongoose.Schema({
  codeCommande: { type: String, required: true, unique: true },
  dateCommande: { type: Date, required: true },
  fournisseur: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Supplier', 
    required: true 
  },
  expedition: { 
    type: mongoose.Schema.Types.Mixed, // Can be an ObjectId or an embedded object
    required: true
  },  
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
