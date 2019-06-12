var express = require("express");
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require("../modules/blog_module");
var statusModule = require("../modules/status_module");
router.get("/", (req, res, next) => {
    var statusSelector = statusModule.all();
    var blogSelector = blogModule.select_by_writerId(1);
    var status = Array;
    statusSelector.then(s => {
        status = s;
        console.log(status[0]);
    }).catch(err => {
        console.log(err);
    });
    blogSelector.then(rows => {
        rows.forEach(element => {
            element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
            element.edit = true;
            if (element.status == 2)
                element.edit = false;

            element.status = status.find(s => {
                if (s.id == element.status)
                    return s;
            }).name;
            console.log(rows);
        });
        res.render("writer/home", {
            blogs: rows,
            layout: "layout_writer"
        });
    }).catch(err => {
        console.log(err);
    });
});

router.get("/editblogs", (req, res, next) => {
    res.render("writer/editblogs", {});
});

router.get("/addblogs", (req, res, next) => {
    res.render("writer/addblogs", {
        layout: "layout_writer"
    });
});

module.exports = router;