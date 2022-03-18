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
router.get('/new', (req, res) => {
  //render the create form
  res.render('userForm.ejs');
});
router.post('/', (req, res) => {
  //capture the form data
  User.create(req.body, (err, createdUser) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
  });
});
router.get('/:id', (req, res) => {
  //single user detail
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { user });
  });
});
router.put('/:id/edit', (req, res) => {
  //edit form
});
router.delete('/:id', (req, res) => {
  //delete the user
});

module.exports = router;
