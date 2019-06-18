var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('SELECT blogs.*,categoryChild.title as category_child,categoryChild.name as Name,categoryParent.name as pName, categoryParent.title as category FROM ptudw_db.blogs blogs, ptudw_db.category categoryChild, ptudw_db.category categoryParent WHERE blogs.category_id=categoryChild.id  and categoryParent.id=categoryChild.parent_id');
    },
    select: (id_blog) => {
        return blog.load('select * from blogs where id_blog = ' + id_blog);

    },
    select_detail_blog:(id_blog)=>{
        return blog.load(` select  blogs.writer_id,blogs.tag,blogs.title,blogs.summary,blogs.content, users.fullname,category_child.title as category_child,category_child.name as name,category.title as category,category.name as pname from users,blogs,category category_child, category category where blogs.id_blog = ${id_blog} and blogs.writer_id=users.id    and blogs.category_id=category_child.id and category_child.parent_id=category.id`)
    },
    select_category_child: (category_child) => {

        return blog.load(`SELECT blogs.*,categoryChild.title as category_child,categoryChild.name as Name,categoryParent.name as pName,categoryParent.title as category FROM ptudw_db.blogs blogs, ptudw_db.category categoryChild, ptudw_db.category categoryParent WHERE categoryChild.title='${category_child}' AND blogs.category_id=categoryChild.id AND categoryParent.id=categoryChild.parent_id`);
    },
    select_blogs_relate: (category_child,id_blog) => {

        return blog.load(`SELECT blogs.*,categoryChild.title as category_child,categoryChild.name as Name,categoryParent.name as pName,categoryParent.title as category FROM ptudw_db.blogs blogs, ptudw_db.category categoryChild, ptudw_db.category categoryParent WHERE categoryChild.title='${category_child}' AND blogs.category_id=categoryChild.id AND categoryParent.id=categoryChild.parent_id AND blogs.id_blog <> ${id_blog}`);
    },
    select_category: (category) => {

        return blog.load(`SELECT blogs.*,categoryChild.title as category_child,categoryChild.name as Name,categoryParent.name as pName,categoryParent.title as category FROM ptudw_db.blogs blogs, ptudw_db.category categoryChild, ptudw_db.category categoryParent WHERE categoryParent.title='${category}' AND categoryParent.id=categoryChild.parent_id AND blogs.category_id=categoryChild.id`);
    },
    select_part: (id_blog, id_part) => {
        return blog.load('select * from blogs where id_blog = ' + id_blog);
    },

    select_by_writerId: (writer_id) => {
        console.log('select * from blogs where id_blog = ' + id_blog);
        return blog.load('select *,blogs.id_blog as id from blogs where id_blog = ' + id_blog);
    },
    select_by_writerId_status: (writer_id, id_status) => {
        console.log(`select id_blog as id,title,status,date_publish from blogs where writer_id = ${writer_id} & status = ${id_status}`);
        return blog.load(`select id_blog as id,title,status,date_publish from blogs where writer_id = ${writer_id} AND status =  + ${id_status}`);
    },
    select_by_writerId: (writer_id) => {
        //console.log('select * from blog where writer_id = ' + writer_id);
        return blog.load('select id_blog as id,title,status,date_publish from blogs where writer_id = ' + writer_id);
    },
    add: (entity) => {
        //console.log('select * from blog where writer_id = ' + writer_id);
        return blog.add('blogs', entity);
    },
    update: entity => {

        console.log(entity.id_blog);

        return blog.update('blogs', 'id_blog', entity);
    },
    delete: id => {
        return blog.delete('blogs', 'id_blog', id);
    }
}