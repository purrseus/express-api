const Product = require('../models/product.model');

module.exports.products = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.search = async (req, res) => {
  const query = req.query.name;
  try {
    const products = await Product.find();
    const filterProducts = products.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    res.json(filterProducts);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.create = async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.update = async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          image: req.body.image,
          name: req.body.name,
          description: req.body,description,
          quantity: req.body.quantity,
          price: req.body.price,
        }
      }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.id });
    res.json(removedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};