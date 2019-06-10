var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var account_module = require('../modules/account_module')
var passport = require('passport')
var auth = require('../middlewares/auth')



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
      res.render('account/login', {
        alert: alert,
        layout: false
      })
    })
    .catch(err => {
      console.log(err);
    })

})

router.get('/login', (req, res, next) => {
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

      return res.redirect('/');
    });
  })(req, res, next);
})
router.get('/admin', auth, (req, res, next) => {
  res.end('admin');
})

module.exports = router;