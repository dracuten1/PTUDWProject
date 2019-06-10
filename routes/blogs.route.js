var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');

router.get('/', (req, res) => {
    res.render('blogs/detail_blog', {

    });
})

router.get('/ThoiSu', (req, res) => {
    res.render('blogs/list_blog', {

    });
})

router.get('/PhapLuat', (req, res) => {
    res.render('blogs/list_blog', {

    });
})

router.get('/TheGioi', (req, res) => {
    res.render('blogs/list_blog', {

    });
})

router.get('/KinhDoanh', (req, res) => {
    res.render('blogs/list_blog', {

    });
})

router.get('/CongNghe', (req, res) => {
    res.render('blogs/list_blog', {

    });
})
router.get('/CongNghe/eSport/:id', (req, res) => {
    var p = blogModule.all();
    p.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
        });
        console.log(rows[1].content);
        res.render('blogs/detail_blog', {
            content: rows[0].content,
        });
    }).catch(err => {
        console.log(err);
    })

   
})

router.get('/PhimAnh', (req, res) => {
    res.render('blogs/list_blog', {

    });
})




module.exports = router;