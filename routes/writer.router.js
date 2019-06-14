var express = require("express");
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require("../modules/blog_module");
var statusModule = require("../modules/status_module");
var categoryModule = require("../modules/category_module");

router.get("/", (req, res, next) => {
    Promise.all(
            [
                statusModule.all(),
                blogModule.select_by_writerId(1)
            ]
        )
        .then(([status, rows]) => {
            console.log(status);
            console.log(rows);
            rows.forEach(element => {
                element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
                element.edit = true;
                if (+element.status === 2)
                    element.edit = false;

                function findStatus(s) {
                    if (+s.id === +element.status)
                        return s;
                }
                element.status = status.find(findStatus).name;
                console.log(rows);
            })
            res.render("writer/home", {
                blogs: rows,
                layout: "layout_writer"
            });
        }).catch(err => {
            console.log(err);
        })
});

router.get("/editblogs/:id", (req, res, next) => {
    console.log("edit hello");
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('/writer', {
            error: true
        });
        return;
    }

    blogModule.select(id).then(rows => {
        if (rows.length > 0) {
            res.render('writer/editblogs', {
                error: false,
                layout: "layout_writer",
                blog: rows[0]
            });
        } else {
            res.render('/writer', {
                error: true
            });
        }
    }).catch(err => {
        console.log(err);
    });
});
router.post("/editblogs", (req, res, next) => {
    console.log('post edit blog');
    //console.log(req.body);
    var newBlog = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.editor1,
        writer_id: 1,
        status: 1,
        category_id: +req.body.category,
    };
    console.log(newBlog);
    blogModule.update(newBlog).then(id => {
        console.log(id);
        res.redirect('/writer');
    }).catch(err => {
        console.log(err);
    });

});
router.post("/addblogs", (req, res, next) => {
    console.log('post add blog');
    //console.log(req.body);
    var newBlog = {
        title: req.body.title,
        content: req.body.editor1,
        writer_id: 1,
        status: 1,
        category_id: +req.body.category,
    };
    //console.log(newBlog);
    blogModule.add(newBlog).then(id => {
        console.log(id);
        res.redirect('/writer');
    }).catch(err => {
        console.log(err);
    });

});

router.get("/addblogs", (req, res, next) => {
    var categorySelector = categoryModule.all();
    var cateArr = Array;
    categorySelector.then(c => {
        cateArr = c;
        defautlCategory = cateArr.shift();
        console.log(cateArr);
        res.render("writer/addblogs", {
            firstCat: defautlCategory,
            categories: cateArr,
            layout: "layout_writer"
        });
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;