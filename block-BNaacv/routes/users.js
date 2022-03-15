var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('users.ejs');
});
router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});
router.post('/', (req, res) => {
  //
});
router.get('/:id', (req, res) => {
  res.render('singleUser.ejs');
});
router.get('/:id/edit', (req, res) => {
  //
});
router.put('/:id', (req, res) => {
  //
});
router.delete('/:id', (req, res) => {
  //
});

module.exports = router;
