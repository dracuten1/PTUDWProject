var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('select * from blog');
    },
    select: (id_blog) => {
        console.log('select * from blog where id = ' + id_blog);
        return blog.load('select * from blog where id = ' + id_blog);
    },
    select_by_writerId_status: (writer_id, id_status) => {
        console.log(`select id,title,status,date_publish from blog where writer_id = ${writer_id} & status = ${id_status}`);
        return blog.load(`select id,title,status,date_publish from blog where writer_id = ${writer_id} AND status =  + ${id_status}`);
    },
    select_by_writerId: (writer_id) => {
        //console.log('select * from blog where writer_id = ' + writer_id);
        return blog.load('select id,title,status,date_publish from blog where writer_id = ' + writer_id);
    },
    add: (entity) => {
        //console.log('select * from blog where writer_id = ' + writer_id);
        return blog.add('blog', entity);
    },
    update: entity => {
        return blog.update('blog', 'id', entity);
    },
    delete: id => {
        return blog.delete('blog', 'id', id);
    },
}