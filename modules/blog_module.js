var blog =require("../services/blog_service");

module.exports={
    all:()=>{
    
        return blog.all('select * from blog');
    }
}