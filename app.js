var express=require('express');
var exphbs=require('express-handlebars');
var router_h=require('./routes/home.router');
var router_a=require('./routes/account.router');
var hbs_sections=require('express-handlebars-sections');

var app=express();
app.engine('.hbs',exphbs(
    {
        layoutsDir:'./views/layout',
        defaultLayout:'main',
        extname:'.hbs',
        helpers:{
            section:hbs_sections()
        }
    }
))
 app.set('view engine', '.hbs');
 app.use('/public',express.static('public'));
 
 app.use('/',router_h);
 app.use('/account',router_a);

app.listen(3000,()=>{
    console.log('listen port 3000');
})

