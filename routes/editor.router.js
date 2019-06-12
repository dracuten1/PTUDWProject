var express=require('express')
var router=express.Router()

router.get('/',(req,res,next)=>{
    res.render('editor/edit',{
        layout: 'layout_editor'
    })
})

router.get('/ad',(req,res,next)=>{
    res.render('editor/byCat',{
        layout: 'layout_editor'
    })
})


module.exports=router;