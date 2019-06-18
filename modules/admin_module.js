var request = require('../services/service')

module.exports = {
    loadAllBlogs: () => {
        var sql = "select * from blogs";
        return request.load(sql);
    },
}