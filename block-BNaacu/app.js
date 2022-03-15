var express = require('express');
const { dirname } = require('path');
var path = require('path');
var studentsRouter = require('./routes/students');

var app = express();

//middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/students', studentsRouter);

//handle middleware error
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
