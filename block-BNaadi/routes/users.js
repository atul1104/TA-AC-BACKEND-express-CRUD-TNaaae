var express = require('express');
var router = express.Router();
var User = require('../models/user');

//user Routes
router.post('/', (req, res, next) => {
  User.create(req.body, (err, createduser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user });
  });
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.delete('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
