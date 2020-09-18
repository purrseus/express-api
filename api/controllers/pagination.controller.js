const Product = require('../models/product.model');

module.exports.pagination = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const products = await Product.find();

    const pagingCalculator = (page, limit) => {
      const start = (page - 1) * limit;
      const end = page * limit;
      const currentPage = products.slice(start, end);
      res.json(currentPage);
    }
    pagingCalculator(page, limit);
  } catch (error) {
    res.json({ message: error });
  }
}