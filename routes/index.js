const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index.html');
});

module.exports = router;
