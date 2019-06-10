var blog =require("../services/service");

module.exports={
    all:()=>{
        return blog.load('select * from blog');
    }
}