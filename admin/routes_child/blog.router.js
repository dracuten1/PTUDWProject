var express = require('express');
var router = express.Router();
var helpers = require('../helpers/adminHelper');

router.get('/', (req, res, next) => {
    helpers.loadAllBlogPreview().then(result => {
        result.forEach(element => {
            element.canExport = true;
            if (element.status == 4)
                element.canExport = false;
        });
        res.render("admin/index", {
            blogs: result,
            layout: "layout_admin"
        });
    }).catch(err => {
        res.send(err);
    });
});
router.post('/export/:blogId', (req, res, next) => {
    var blogId = req.params.blogId;
    if (req.params.blogId == undefined) {
        res.send(false);
    }
    helpers.exportBlog(blogId).then(result => {
        res.send(true);
    }).catch(err => {
        res.send(false);
    });

});
router.post('/delete/:blogId', (req, res, next) => {
    var blogId = req.params.blogId;
    if (req.params.blogId == undefined) {
        res.send(false);
    }
    helpers.deleteBlog(blogId).then(result => {
        res.send(true);
    }).catch(err => {
        res.send(false);
    });

});


module.exports = router;