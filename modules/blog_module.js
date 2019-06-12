var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('select * from blog');
    },
    select: (id_blog) => {
        console.log('select * from blog where id_blog = ' + id_blog);
        return blog.load('select * from blog where id_blog = ' + id_blog);

    },
    select_part: (id_blog, id_part) => {
        console.log('select * from blog where id_blog = ' + id_blog + ' and id_part = ' + id_part);
        return blog.load('select * from blog where id = ' + id_blog);
    },
    select_by_writerId: (writer_id) => {
        //console.log('select * from blog where writer_id = ' + writer_id);
        return blog.load('select id,title,status,date_publish from blog where writer_id = ' + writer_id);
    }
}