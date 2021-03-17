var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');

// モデルの読み込み
var User = require('./models/user');
var Card = require('./models/card');

User.sync().then(() => {
  Card.belongsTo(User, { foreignKey: 'createdBy' });
  Card.sync();
});

var config = require('./config');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var profileRouter = require('./routes/profile');
var chatRouter = require('./routes/chat');

passport.serializeUser((user, cb) => { cb(null, user); });
passport.deserializeUser((obj, cb) => { cb(null, obj); });
passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID || config.GitHub.clientID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET || config.GitHub.clientSecret,
    callbackURL: process.env.HEROKU_URL ? `process.env.HEROKU_URL/auth/github/callback` : config.GitHub.callbackURL
  },

  function (accessToken, refreshToken, profile, done) {

    process.nextTick(() => {

      User.upsert(
        {
        userId: profile.id,
        username: profile.username,
        displayName: profile.displayName
        }
      ).then(() => done(null, profile));
    });
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
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile',profileRouter);
app.use('/chat',chatRouter);

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
  res.redirect('/');
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
