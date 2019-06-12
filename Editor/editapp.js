var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var createError = require('http-errors');
var hbs_sections = require('express-handlebars-sections');


var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts',
    helpers: {
      section: hbs_sections()
    }
  
}));

app.set('view engine', 'hbs');

app.use(require('./middlewares/locals.mdw'));

app.use(require('./middlewares/locals.mdw2'));


app.use('/', require('./routes/editor/category.route'));

app.use((req, res, next) => {
    next(createError(404));
  })
  
  app.use((err, req, res, next) => {
    var status = err.status;
    var errorView = 'error';
  
    var msg = err.message;
    var error = err;
    res.status(status).render(errorView, {
      layout: false,
      msg,
      error
    })
  })

app.listen(3000, () => {
    console.log('Web Server is running at http://localhost:3000');
})
