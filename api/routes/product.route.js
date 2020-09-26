const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/categories', controller.categories);

router.get('/all', controller.getAll);

router.get('/:category', controller.products);

router.get('/search', controller.search);

module.exports = router;