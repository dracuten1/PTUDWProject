var express = require('express');
var router = express.Router();
var helpers = require('../helpers/adminHelper');
router.get('/', (req, res, next) => {
    helpers.loadAllUserPreview().then(result => {
        console.log(result.roles);
        var users = [].concat(result.users);
        users.forEach(u => {
            u.roles = JSON.parse(JSON.stringify(result.roles));
            u.roles.forEach(r => {
                r.current = false;
                if (u.role_name == r.role_name) {
                    r.current = true;
                    console.log(`user ${u.fullname} role = ${r.role_name}`);
                }
            });
        });
        users.forEach(u => {
            u.roles.forEach(r => {
                if (r.current) {
                    console.log(`user ${u.fullname} role = ${r.role_name}`);
                }
            })
        });
        //console.log(result.users);

        res.render("admin/user", {
            users: result.users,
            layout: "layout_admin"
        });
    }).catch(err => {
        res.send(err);
    });
});
router.get('/editor/:id', (req, res, next) => {
    var editorId = req.params.id;
    if (!editorId) {
        res.send("Wrong url");
    }
    helpers.getEditorTask(editorId).then(result => {
        console.log(result);
        var task = result.task;
        task.forEach(r => {
            if (r.editor_id != undefined)
                r.current = true;
        });
        console.log(task);

        res.render("admin/editor_task", {
            task: task,
            user: result.user,
            layout: "layout_admin"
        });
    }).catch(err => {
        res.send(err);
    });
});
router.post('/editor/:id', (req, res, next) => {
    var editorId = req.params.id;
    console.log(req.body);

    if (!editorId) {
        res.send("Wrong url");
    }
    res.send(true);
});

router.post('/changeRole/:userId', (req, res, next) => {
    var userId = req.params.userId;
    if (req.params.userId == undefined) {
        res.send(false);
    }
    if (req.body.newRoleId == undefined)
        res.send(false);
    console.log(req.body.newRoleId);

    helpers.changeUserRole(userId, req.body.newRoleId).then(result => {
        res.send(true);
    }).catch(err => {
        res.send(false);
    });

});
router.post('/delete/:userId', (req, res, next) => {
    var userId = req.params.userId;
    if (req.params.userId == undefined) {
        res.send(false);
    }
    helpers.deleteBlog(userId).then(result => {
        res.send(true);
    }).catch(err => {
        res.send(false);
    });
});


module.exports = router;