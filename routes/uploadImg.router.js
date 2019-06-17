var express = require('express');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imgs');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
var upload = multer({
    storage: storage
});
router.post('/fileUpload', upload.single('myFile'), (req, res, next) => {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
    var x = req.file.path.replaceAll('\\', "/");
    console.log(x);

    res.send(`/${x}`);
});
router.get('/img', (req, res, next) => {
    res.render("../views/writer/uploadImg.hbs", {
        error: true
    });
});
router.get('/', (req, res, next) => {
    res.send("may dien a");
});
module.exports = router;