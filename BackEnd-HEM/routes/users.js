var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'HEM Automotive', profile: 'User' });
  res.render('/profile');
});


module.exports = router;
