const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  image: {
    type: String,
    require: true
  },

  products: {
    type: Array,
    require: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;