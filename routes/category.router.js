var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var category_module = require('../modules/category_module');
var blog_module = require('../modules/blog_module');


router.get('/:Category/:Category_child', (req, res) => {
    var category = req.params.Category;
    var category_child= req.params.Category_child;
    var p = category_module.select_category_child(category);
    var b = blog_module.select_category_child(category_child);
    var blog=[];

    b.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "hh:mm dd/mm/yyyy");
        });
        rows.forEach(element => {
            
           blog.push(element);
       });

    }).catch(err => {
        console.log(err);
    });

    p.then(rows => {
      
        res.render('blogs/list_blog', {
            category: rows[0].category,
            category_child: rows,
            blog:blog,
        
        });
    }).catch(err => {
        console.log(err);
    })
    
})
router.get('/:Category/', (req, res) => {
    var category = req.params.Category;
    var p = category_module.select_category_child(category);
    var b = blog_module.select_category(category);
    var blog=[];

    b.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "hh:mm dd/mm/yyyy");
        });
        rows.forEach(element => {
            
           blog.push(element);
       });

    }).catch(err => {
        console.log(err);
    });

    p.then(rows => {
      
        res.render('blogs/list_blog', {
            category: rows[0].category,
            category_child: rows,
            blog:blog,
        
        });
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;