const Product = require('../models/product.model');

module.exports.products = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: err });
  }
};

module.exports.create = async (req, res) => {
  const newUser = new User({
    image: req.body.image,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};