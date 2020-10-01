const Gallery = require('../models/gallery.model');

module.exports.gallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const photo = await Gallery.findById(req.params.id);
    res.json(photo);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.search = async (req, res) => {
  const { name } = req.query;
  try {
    const gallery = await Gallery.find();
    const filterPhotos = gallery.filter((photo) => {
      return photo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    res.json(filterPhotos);
  } catch (error) {
    res.json({ message: error });
  }
};