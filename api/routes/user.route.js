const express = require('express');
const router = express.Router();

const {
  users,
  findById,
  search,
  create,
  update,
  remove
} = require('../controllers/user.controller');

router.get('/all', users);

router.get('/:id', findById);

router.get('/', search);

router.post('/signup', create);

router.patch('/:id', update);

router.delete('/:id', remove);

module.exports = router;