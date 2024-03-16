var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});


module.exports = router;
