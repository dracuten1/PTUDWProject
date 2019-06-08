var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');
router.get('/home', (req, res) => {
    var p=blogModule.all();
    p.then(rows => {
        rows.forEach(element => {
            element.date_publish=dateFormat(element.date_publish,"dd/mm/yyyy");
        });
        first=rows.shift();
        res.render('home/home.hbs',
        {      
          title:first.title,
          link_img:first.link_img,
          date:first.date_publish,
          blogs:rows
        });
    }).catch(err=>{
        console.log(err);
    })
  
})
router.get('/', (req, res) => {
    res.render('home/home.hbs',{
        css:'home'
    });
})

module.exports = router;