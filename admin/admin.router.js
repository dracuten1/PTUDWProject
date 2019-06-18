var express = require('express')
var router = express.Router()
var blogRoute = require('./routes_child/blog.router')

router.use('/blog', blogRoute);


module.exports = router;