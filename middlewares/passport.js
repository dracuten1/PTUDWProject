var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var account_module = require('../modules/account_module');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('../modules/auth_gg');
var User = require('../modules/user');

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  var ls = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    account_module.singleByUserName(username).then(rows => {
      if (rows.length === 0) {
        return done(null, false, {
          message: 'Tên đăng nhập không chính xác'
        });
      }
      var user = rows[0];
      var ret = bcrypt.compareSync(password, rows[0].password);
      if (ret) {
        return done(null, user);
      }

      return done(null, false, {
        message: 'Nhập sai mật khẩu rồi bạn ơi!'
      });
    }).catch(err => {
      return done(err, false);
    })
  });

  passport.use(ls);

  passport.serializeUser((user, done) => {
    return done(null, user);
  });

  passport.deserializeUser((user, done) => {
    return done(null, user);
  });

  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        User.findOne({
          'google.id': profile.id
        }, function (err, user) {
          if (err)
            return done(err);
          if (user)
            return done(null, user);
          else {
            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;

            newUser.save(function(err){
              if(err)
                throw err;
              return done(null, newUser);
            })
            console.log(profile);
          }
        });
      });
    }
  ));
}