const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  remise: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Category
    ref: 'Category',
    required: true,
  },
  image: {
    type: String, // URL or file path to the image
  },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
