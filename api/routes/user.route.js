const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.get('/all', controller.users);

router.get('/:id', controller.findById);

router.get('/', controller.search);

router.post('/signup', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;