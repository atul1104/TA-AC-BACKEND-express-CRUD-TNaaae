var express = require('express');
var path = require('path');
var usersRouter = require('./routes/users');

var app = express();

//middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
