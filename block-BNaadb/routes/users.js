var express = require('express');
const { create } = require('../models/User');
var router = express.Router();
var User = require('../models/User');

router.get('/', (req, res, next) => {
  //handle action
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});
router.get('/new', (req, res, next) => {
  //render the create form
  res.render('userForm.ejs');
});
router.post('/', (req, res, next) => {
  //capture the form data
  User.create(req.body, (err, user) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
  });
});
router.get('/:id', (req, res, next) => {
  //single user detail
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { user });
  });
});
router.get('/:id/edit', (req, res, next) => {
  //edit form
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUser.ejs', { user });
  });
});
router.post('/:id', (req, res, next) => {
  //edit form
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
router.get('/:id/delete', (req, res, next) => {
  //delete the user
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deleteduser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
