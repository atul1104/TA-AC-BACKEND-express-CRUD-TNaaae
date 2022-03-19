//require
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//connect to database
mongoose.connect('mongodb://localhost/userdiary3', (err) => {
  console.log(err ? err : 'Connected to Database');
});

//instance the app
var app = express();

//set up template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static directory
app.use(express.static(path.join(__dirname, 'public')));

//Routing middleware
app.use('/', indexRouter);
app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
