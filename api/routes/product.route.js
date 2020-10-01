const express = require('express');
const router = express.Router();

const {
  categories,
  getAll,
  search,
  products
} = require('../controllers/product.controller');

router.get('/categories', categories);

router.get('/all', getAll);

router.get('/search', search);

router.get('/:name', products);

module.exports = router;