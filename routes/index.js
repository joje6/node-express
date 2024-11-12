const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ data: 'hello world!!!' });
});

router.get('/test', (req, res, next) => {
  res.send(req.query);
});

router.get('/status/403', (req, res, next) => {
  res.status(403).send({test: 'ok'});
});

router.get('/status/502', (req, res, next) => {
  res.status(403).send({test: 'ok'});
});

module.exports = router;
