const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/categories', controller.categories);

router.get('/all', controller.getAll);

router.get('/search', controller.search);

router.get('/:category', controller.products);

module.exports = router;