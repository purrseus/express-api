const express = require('express');
const router = express.Router();

const controller = require('../controllers/gallery.controller');

router.get('/all', controller.gallery);

router.get('/:id', controller.findById);

router.get('/', controller.search);

module.exports = router;