var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var account_module = require('../modules/account_module')
var passport = require('passport')
var auth = require('../middlewares/auth')
var auth_after_login = require('../middlewares/auth_after_login')

router.get('/is-available', (req, res, next) => {
  var username = req.query.username;

  account_module.singleByUserName(username).then(rows => {

    if (rows.length > 0) {
      return res.json(false);
    }
    return res.json(true);
  }).catch(err => {
    console.log(err);
  })

})

router.get('/register', (req, res, next) => {
  res.render('account/register', {
    layout: false,

  })
})
router.post('/apiLogin', (req, res, next) => {
  console.log("FB login");
  console.log(req.body);
  if (!req.body.id) {
    res.send(false);
  }
  var user = {
    facebookId: req.body.id,
    role: 1,
    username: req.body.id,
    fullname: req.body.name,
  };
  account_module.singleFbId(req.body.id).then(account => {
    console.log(account);
    if (account.length == 0) {
      console.log("no account");

      account_module.add(user).then(id => {
        user.id = id;

        passport.authenticate('local', (err, user, info) => {
          if (err)
            return next(err);

          req.logIn(user, err => {
            if (err)
              return next(err);
            res.redirect('back');
          });

        })(req, res, next);
      }).catch(err => {
        res.send(false);
      })
    }

    user = account[0];

    passport.authenticate('local', (err, user, info) => {
      if (err)
        return next(err);
      console.log("Errorrrrrrrrrr");

      req.logIn(user, err => {
        if (err)
          return next(err);
        res.redirect('back');
      });

    })(req, res, next);
  });
});
router.post('/register', (req, res, next) => {
  var saltRounds = 10;
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var entity = {
    role: 1,
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    password: hash
  }
  var alert = "alert(\'Đăng kí thành công usename: \')";
  account_module.add(entity)
    .then(id => {
      res.redirect('/account/login')
    })
    .catch(err => {
      console.log(err);
    })

})

router.get('/login', auth_after_login, (req, res, next) => {
  res.render('account/login', {
    layout: false
  })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      return res.render('account/login', {
        layout: false,
        err_message: info.message
      })
    }

    req.logIn(user, err => {
      if (err)
        return next(err);
      res.render('home/home', {
        close: true
      });
    });

  })(req, res, next);
});
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
})

router.get('/admin', auth, (req, res, next) => {
  res.end('admin');
})

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/account/login'
  }));

router.get('/profile',auth, (req, res, next) => {
  var fullname = req.session.passport.user.fullname;
  var email = req.session.passport.user.email;
  res.render('account/profile', {
    fullname: fullname,
    email: email,
  })
})
router.post('/profile', (req, res, next) => {
  var fullname = req.body.fullname;
  var email = req.body.email;
  id = req.session.passport.user.id;

  var entity = {
    id: id,
    fullname: fullname,
    email: email
  }
  var p = account_module.updateProfile(entity)
  p.then(rows=>{
    req.session.passport.user.fullname = fullname;
    req.session.passport.user.fullname = email;
    res.render('account/profile', {
      fullname:fullname,
      email:email,
      success: true,
    })  
  }).catch(err=>{
    console.log(err);
  })
  
})

module.exports = router;