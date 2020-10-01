const express = require('express');
const router = express.Router();

const { pagination } = require('../controllers/pagination.controller');

router.get('/', pagination);

module.exports = router;