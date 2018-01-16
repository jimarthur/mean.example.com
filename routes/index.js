var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  

  res.render('index', { title: 'Running with PM2 again', name: 'jamesarthur'});
});

module.exports = router;
