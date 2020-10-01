const Product = require('../models/product.model');

module.exports.categories = async (req, res) => {
  try {
    const categories = await Product.find();
    res.json(categories);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Product.find();
    const products = categories.reduce((acc, cur) => {
      return acc.concat(cur.products);
    }, []);
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.products = async (req, res) => {
  const { name } = req.params;
  try {
    const categories = await Product.find();
    const { products } = categories.find(category => category.name === name);
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.search = async (req, res) => {
  const { name } = req.query;
  try {
    const categories = await Product.find();
    const products = categories.reduce((acc, cur) => {
      return acc.concat(cur.products);
    }, []);

    const filterProducts = products.filter(product => {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    res.json(filterProducts);
  } catch (error) {
    res.json({ message: error });
  }
};
