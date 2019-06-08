var express=require('express')
var router=express.Router()

router.get('/register',(req,res)=>{
    res.render('account/register',{
        css:'registration'
    })
})

router.post('/register',(req,res)=>{
    res.render('account/register',{
        css:'registration'
    })
})

router.get('/login',(req,res)=>{
    res.render('account/login',{
        css:'login'
    })
})

router.post('/login',(req,res)=>{
    res.render('account/login',{
        css:'login'
    })
})



module.exports=router;