var session = require('express-session');

module.exports = function (app) {
  app.use(session({
    secret: 'hello',
    resave: true,
    saveUninitialized: true
  }));
}