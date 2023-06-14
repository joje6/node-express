const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash('password', salt, function (err, hash) {
      if (err) return next(err);

      // Store hash in your password DB.
      res.render('index.html', hash);
    });
  });

});

module.exports = router;
