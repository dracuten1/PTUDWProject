var express = require('express');
var router = express.Router();

var blogRoute = require('./routes_child/blog.router');
var userRoute = require('./routes_child/user.route');

router.use('/blog', blogRoute);
router.use('/users', userRoute);
router.get('/', blogRoute);

module.exports = router;