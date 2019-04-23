const router = require('express').Router();
const bookController = require('../controllers/book');

router.get('/last',bookController.last);

module.exports = router ;