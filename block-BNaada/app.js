var express = require('express');
var path = require('path');
var userRouter = require('./routes/users.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user-diary', (err) => {
  console.log(err ? err : 'Connected to database');
});

var app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/users', userRouter);

//handle Error
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});
//custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
