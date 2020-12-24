const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const post = require('./routes/post');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//==============mongose conection ==============
const dbJson = require('./helper/db')

mongoose.connect(dbJson.db, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('mongoDbga online ulandik');
});
//==============mongose conection ==============

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/post', post);
if( process.env.NODE_ENV === "production" ){

  app.use(express.static(__dirname + '/public'))

  app.get('*', (req,res)=>{

    res.sendFile(__dirname+'/public/index.html')

  })
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
