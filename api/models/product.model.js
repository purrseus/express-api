const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    require: true
  },

  description: {
    type: String,
    require: true
  },

  quantity: {
    type: String,
    require: true
  },

  price: {
    type: String,
    require: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;