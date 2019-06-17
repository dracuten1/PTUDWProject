var express = require('express');
var morgan = require('morgan');
var exphbs = require('express-handlebars');
var path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var router_a = require('./routes/account.router');
var router_bs = require('./routes/blogs.router');
var router_c = require('./routes/category.router');
var router_e=require('./routes/editor.router');
var router_h = require('./routes/home.router');
var router_w = require('./routes/writer.router');
var authWriter = require("./middlewares/auth_writer");
var hbs_sections = require('express-handlebars-sections');
//
var createError = require('http-errors');
//
var app = express();

require('./middlewares/passport')(app);
require('./middlewares/session')(app);

app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('./middlewares/auth_home'))

app.engine('.hbs', exphbs({
    layoutsDir: './views/layout',
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        section: hbs_sections()
    }
}))
//Set view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use('/public', express.static( 'public'))


// Router
app.use('/account', router_a);
app.use('/blogs', router_bs);
app.use('/category', router_c);
app.use('/', router_h);
app.use('/editor', router_e);
app.use('/writer', [authWriter, router_w]);


app.listen(3000, () => {
    console.log('listen port 3000');
})