var express = require('express');
var router = express.Router();

//router
router.get('/', (req, res) => {
  res.render('index.ejs');
});

module.exports = router;
