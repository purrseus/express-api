const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/all', controller.products);

router.get('/:id', controller.findById);

router.get('/', controller.search);

router.post('/', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;