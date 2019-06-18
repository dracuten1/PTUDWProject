var express = require('express');
var router = express.Router();

var statusModule = require("../../modules/status_module");
var blogModule = require('../../modules/blog_module');
router.get('/', (req, res, next) => {
    console.log("get params");
    console.log(req.query);
    var selectedStatus = req.query.status || 0;
    var promise;
    var currentStatus = 0;
    if (+selectedStatus !== 0) {
        currentStatus = +selectedStatus;
        console.log("get by status");
        promise = Promise.all([statusModule.all(), blogModule.all()]);
    } else {
        console.log("get all");
        promise = Promise.all([statusModule.all(), blogModule.select_by_writerId(req.session.passport.user.id)]);
    };

    promise.then(([status, rows]) => {
            //console.log(status);
            //console.log(rows);
            status.push({
                id: 0,
                name: "Tát cả trạng thái",
            });
            status.forEach(s => {
                s.selected = false;
                if (+s.id === currentStatus) {
                    s.selected = true;
                }
            });
            rows.forEach(element => {
                element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
                element.edit = true;
                if (+element.status === 2 || +element.status === 4) element.edit = false;

                function findStatus(s) {
                    if (+s.id === +element.status) return s;
                }
                element.status = status.find(findStatus).name;
                //console.log(rows);
            });
            res.render("writer/home", {
                blogs: rows,
                stas: status,
                layout: "layout_writer"
            });
        })
        .catch(err => {
            console.log(err);
        });
})


module.exports = router;