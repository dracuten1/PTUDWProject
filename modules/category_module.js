var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('SELECT b.name,a.name FROM ptudw_db.category a,ptudw_db.category b where b.parent_id=a.id');
    },
    w_all: () => {
        return blog.load('SELECT * FROM ptudw_db.category c where c.parent_id is NOT NULL');
    },
    select_category_child: (category) => {
        console.log(category);

        return blog.load(`SELECT categoryChild.title as category_child,categoryParent.title as category,categoryChild.name as Name,categoryParent.name as pName FROM ptudw_db.category categoryChild, ptudw_db.category categoryParent WHERE categoryParent.title='${category}' AND categoryParent.id=categoryChild.parent_id`);
    }
}