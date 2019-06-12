var sqlService = require("../services/service");

module.exports = {
    all: () => {
        return sqlService.load('select * from blog_status');
    }
}