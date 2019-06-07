var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts'
}));

app.set('view engine', 'hbs');

app.use(require('./middlewares/locals.mdw'));

//app.use('/categories', require('./routes/category.route'));
app.use('/', require('./routes/editor/category.route'));

app.listen(3000, () => {
    console.log('Web Server is running at http://localhost:3000');
})
