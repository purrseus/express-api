const express = require('express');
const router = express.Router();

const { gallery, findById, search } = require('../controllers/gallery.controller');

router.get('/all', gallery);

router.get('/:id', findById);

router.get('/', search);

module.exports = router;