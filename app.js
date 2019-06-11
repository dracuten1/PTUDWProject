var express = require('express');
var morgan = require('morgan');
var exphbs = require('express-handlebars');
var router_h = require('./routes/home.router');
var router_a = require('./routes/account.router');
var router_b = require('./routes/blogs.route');
var router_w=require('./routes/writer.router');
var hbs_sections = require('express-handlebars-sections');
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
app.use('/public', express.static('public'));


// Router
app.use('/', router_h);
app.use('/account', router_a);
app.use('/', router_b);
app.use('/writer', router_w);

app.listen(3000, () => {
    console.log('listen port 3000');
})