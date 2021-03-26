const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')

//  ============ validation  ============

const expressValidator = require('express-validator')
const session = require('express-session')
const passport = require('passport')
const bcrypt = require('bcryptjs')

//  ============ validation  ============

const indexRouter = require('./routes/api');
const post = require('./routes/post');
const admin = require('./routes/admin');
const loginAdmin = require('./routes/loginAdmin')


const app = express();
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
//============== messages ==============

app.use(require('connect-flash')());
app.use(function(req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//============== messages ==============
// ============== express-sessions ==============

app.use(session({
    secret: "MAXFIY KALIT SOZ",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 14 * 24 * 36000000
    }
}))

// ============== express-sessions ==============
// ============== express-validator ==============

app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        let namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}));

// ============== express-validator ==============
// ========== passport js setup =========
require('./helper/passport')(passport)
// require('./routes/register')(passport)
app.use(passport.initialize())

app.use(passport.session())
app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next()
})

// ========== passport js setup =========

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');







app.use(cors({
  origin: 'https://korearaon.herokuapp.com/',
  optionsSuccessStatus: 200 
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/post', post);
app.use('/admin', admin);
app.use('/admin', loginAdmin);



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
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
