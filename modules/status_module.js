var sqlService = require("../services/service");

module.exports = {
    all: () => {
        return sqlService.load('select * from blog_status');
    },
    loadSingle: (id) => {
        if (id == undefined)
            id = 1;
        return sqlService.load(`select * from blog_status where id = ${id}`);
    }
}