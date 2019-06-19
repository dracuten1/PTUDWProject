var adminModule = require('../../modules/admin_module');
var blogModule = require('../../modules/blog_module.js');
var statusModule = require('../../modules/status_module.js');
var userModule = require('../../modules/user_module');

module.exports = {
    loadBlog: (options) => {
        var p = [];
        if (options === undefined) {
            p.push(adminModule.loadAllBlogs());
        } else {
            if (options.statusId) {
                p.push();
            }
        }

        return new Promise((resolve, reject) => {
            reject("sql error");
        });
    },
    loadAllBlogPreview: () => {
        return blogModule.select_blogs_preview();
    },
    exportBlog: (id) => {
        var entity = {
            id_blog: id,
            date_publish: new Date(),
            status: 4,
        }
        return blogModule.update(entity);
    },
    deleteBlog: (id) => {
        return blogModule.delete(id);
    },
    loadAllUserPreview: () => {

        return new Promise((resolve, reject) => {
            Promise.all([userModule.all(), userModule.all_role()])
                .then(([users, roles]) => {
                    var result = {
                        users: users,
                        roles: roles
                    };

                    resolve(result);

                }).catch(err => {
                    reject(err);

                });
        });
    },
    changeUserRole: (userId, roleId) => {
        return userModule.change_role(userId, roleId);
    },
    deleteUser: (userID) => {
        return userModule.deleteU(userID);
    }
};