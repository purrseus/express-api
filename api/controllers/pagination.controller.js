const Gallery = require('../models/gallery.model');

module.exports.pagination = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const photos = await Gallery.find();

    const pagingCalculator = (page, limit) => {
      const start = (page - 1) * limit;
      const end = page * limit;
      const currentPage = photos.slice(start, end);
      res.json(currentPage);
    }
    pagingCalculator(page, limit);
  } catch (error) {
    res.json({ message: error });
  }
}