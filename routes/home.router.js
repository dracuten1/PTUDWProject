var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');
router.get('/home', (req, res) => {
    var p=blogModule.all();
    p.then(rows => {
        rows.forEach(element => {
            element.date_publish=dateFormat(element.date_publish,"hh:mm dd/mm/yyyy");
        });
        res.render('home/home.hbs',
        {      
          title:rows[0].title,
          link_img:rows[0].link_img,
          date_publish:rows[0].date_publish,
          link_blog_detail:rows[0].link_blog_detail 
        });
    }).catch(err=>{
        console.log(err);
    })

  
})
router.get('/', (req, res) => {
    res.render('home/home.hbs',{
       
    });
})

module.exports = router;