var express=require('express')
var router=express.Router()

router.get('/',(req,res,next)=>{
    res.render('writer/home',{
        layout: 'layout_writer'
    })
})

router.get('/editblogs',(req,res,next)=>{
      res.render('writer/editblogs',{
         layout: 'layout_writer'
    })
})

router.get('/addblogs',(req,res,next)=>{
    
    res.render('writer/addblogs',{
        layout: 'layout_writer'
   })
})

module.exports=router;