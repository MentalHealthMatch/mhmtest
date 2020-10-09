var express = require('express');
var router = express.Router();

/* GET classes listing. */
router.get('/', function(req, res, next) {
  res.render('classes', { title: 'Classes', classes: req.val})
});

module.exports = router;
