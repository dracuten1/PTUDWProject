var express = require('express');
var morgan = require('morgan');
var exphbs = require('express-handlebars');
var router_h = require('./routes/home.router');
var router_a = require('./routes/account.router');
var router_b = require('./routes/blogs.route');
var router_w=require('./routes/writer.router');
var hbs_sections = require('express-handlebars-sections');
//
var createError = require('http-errors');
//
var app = express();

require('./middlewares/passport')(app);
require('./middlewares/session')(app);
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.engine('.hbs', exphbs({
    layoutsDir: './views/layout',
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        section: hbs_sections()
    }
}))
//
app.set('view engine', '.hbs');

//
app.use(require('./Editor/middlewares/locals.mdw'));
app.use(require('./Editor/middlewares/locals.mdw2'));
app.use('/editor', require('./Editor/routes/editor/category.route'));
// app.use((req, res, next) => {
//     next(createError(404));
//   })
  
//   app.use((err, req, res, next) => {
//     var status = err.status;
//     var errorView = 'error';
  
//     var msg = err.message;
//     var error = err;
//     res.status(status).render(errorView, {
//       layout: false,
//       msg,
//       error
//     })
//   })
//



app.use('/public', express.static('public'));



// Router
app.use('/', router_h);
app.use('/account', router_a);
app.use('/', router_b);
app.use('/writer', router_w);



app.listen(3000, () => {
    console.log('listen port 3000');
})