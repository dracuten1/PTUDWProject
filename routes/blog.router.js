var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');


router.get('/:Category/:Category_child', (req, res) => {
    res.render('blogs/list_blog', {
    });
})


module.exports = router;