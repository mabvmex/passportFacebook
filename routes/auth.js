const express          = require('express');
const router           = express.Router();
const passportFacebook = require('../helpers/facebook');

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please Sign In with:' });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/facebook', passportFacebook.authenticate('facebook'));

router.get('/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/user');
  });

module.exports = router;