var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');

router.get('/Category', (req, res) => {
    res.render('blogs/list_blog', {
    });
})

router.get('/:Category/:Category_child/:id_blog', (req, res) => {
    var id_blog=req.params.id_blog;
    console.log(id_blog);
    var p = blogModule.select(id_blog); 
    p.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
        });
        res.render('blogs/detail_blog', {
            content: rows[0].content,
        });
    }).catch(err => {
        console.log(err);
    })

})

router.get('/:Category/:Category_child', (req, res) => {
    res.render('blogs/list_blog', {
    });
})


module.exports = router;