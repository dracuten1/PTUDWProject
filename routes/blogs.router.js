var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');



router.get('/:Category_child/:id_blog', (req, res) => {
    var id_blog = req.params.id_blog;
    var category_child = req.params.Category_child;
    var p = blogModule.select_detail_blog(id_blog);
    var b = blogModule.select_blogs_relate(category_child,id_blog);
    var relate=[];
    b.then(rows=>{
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "hh:mm dd/mm/yyyy");
        });
        rows.forEach(element => {
            relate.push(element);   
        });
    }).catch(err=>{
        console.log(err);
    })

    p.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
        });
        res.render('blogs/detail_blog', {
            content: rows[0].content,
            category_child:rows[0].category_child,
            writer:rows[0].fullname,
            name:rows[0].name,
            pname:rows[0].pname,
            category:rows[0].category,
            date_publish:rows[0].date_publish,
            tag:rows[0].tag,
            title:rows[0].title,
            summary:rows[0].summary,
            relate:relate
        });
    }).catch(err => {
        console.log(err);
    })

})


module.exports = router;