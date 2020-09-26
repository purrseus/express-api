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
    const productList = categories.map(category => category.products);
    const products = productList.reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
    const filterProducts = products.filter(product => product.id < 4);
    res.json(filterProducts);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.products = async (req, res) => {
  const categoryName = req.params.name;
  try {
    const categories = await Product.find();
    const category = categories.find(category => category.category === categoryName);
    res.json(category.products);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.search = async (req, res) => {
  const query = req.query.name;
  try {
    const categories = await Product.find();
    const productList = categories.map(category => category.products);
    const products = productList.reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);

    const filterProducts = products.filter(product => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    res.json(filterProducts);
  } catch (error) {
    res.json({ message: error });
  }
};