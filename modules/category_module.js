var blog = require("../services/service");

module.exports = {
    all: () => {
        return blog.load('select * from category');
    },
    select_category_child:(category)=>{
        return blog.load('select * from category where category = '+'\''+ category+ '\'');
    }
}