const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagination.controller');

router.get('/', controller.pagination);

module.exports = router;