var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');

var config = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

passport.serializeUser((user, cb) => { cb(null, user); });
passport.deserializeUser((obj, cb) => { cb(null, obj); });
passport.use(new GitHubStrategy(
  {
    clientID: config.GitHub.clientID,
    clientSecret: config.GitHub.clientSecret,
    callbackURL: config.GitHub.callbackURL
  },

  function (accessToken, refreshToken, profile, done) {

    process.nextTick(() => done(null, profile));
  }
));

var app = express();
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: config.session.secret, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  (req, res) => { }
);
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);
app.get('/login', (req, res) => res.render('login'));
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
});

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