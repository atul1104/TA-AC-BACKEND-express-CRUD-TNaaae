//require
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var userRouter = require('./routes/users');

//connect to mongodb
mongoose.connect('mongodb://localhost/userDiary_2', (err) => {
  console.log(err ? err : 'connected to database');
});

//instantiate the app
var app = express();

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static directory
app.use(express.static(path.join(__dirname, 'public')));

//routing middleware
app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
