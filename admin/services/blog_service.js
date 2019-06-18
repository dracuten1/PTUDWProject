var adminModule = require('../../modules/admin_module');

module.exports = {
    loadBlog: (options) => {
        if (options === undefined) {
            return adminModule.loadAllBlogs();
        }
        return new Promise((resolve, reject) => {
            reject("sql error");
        });
    },
}