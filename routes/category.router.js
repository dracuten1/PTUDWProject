var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var category_module = require('../modules/category_module');
var blog_module = require('../modules/blog_module');

function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\color{#fff}{|}∣|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, "");
    str = str.trim();
    str = str.replace(/\s/g, '');
    return str;
}

router.get('/:Category/:Category_child', (req, res) => {
    var category = req.params.Category;
    var category_child = req.params.Category_child;

    var p = category_module.select_category_child(category);
    var b = blog_module.select_category_child(category_child);
    var blog = [];

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
        rows.forEach(element => {
            element.active = false;
            if (element.category_child == category_child) {
                element.active = true;
            }
        });
        res.render('blogs/list_blog', {
            category: rows[0].category,
            category_child: rows,
            blog: blog,
            pName: rows[0].pName

        });
    }).catch(err => {
        console.log(err);
    })

})
router.get('/:Category/', (req, res) => {
    var category = req.params.Category;
    var p = category_module.select_category_child(category);
    var b = blog_module.select_category(category);
    var blog = [];

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
            blog: blog,
            pName: rows[0].pName

        });
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;