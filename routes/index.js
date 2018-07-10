const express = require('express');
const router  = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

router.get('/user', ensureAuthenticated, (req, res, next) => {
  res.render('index', { user: req.user });
});

router.get('/', (req, res) => {
  res.render('login')
});

module.exports = router;
