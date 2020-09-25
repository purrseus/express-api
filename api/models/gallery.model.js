const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  
  image: {
    type: String,
    required: true
  },

  photoId: {
    type: Number,
    require: true
  },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;