var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('select * from blogs');
    },
    select: (id_blog) => {
        return blog.load('select * from blogs where id_blog = ' + id_blog);

    },
    select_part: (id_blog, id_part) => {
        return blog.load('select * from blogs where id = ' + id_blog);
    }

}