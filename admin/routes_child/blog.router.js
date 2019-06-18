var express = require('express');
var router = express.Router();
var blogService = require('../services/blog_service');

var statusModule = require("../../modules/status_module");
var blogModule = require('../../modules/blog_module');
router.get('/', (req, res, next) => {
    var options = {
        blogId: 1,
        writerId: 2,
        statusName: true,
    }
    blogService.loadBlog().then(result => {
        res.render("admin/index", {
            layout: "layout_writer"
        });
    }).catch(err => {
        res.send(err);
    })
})


module.exports = router;