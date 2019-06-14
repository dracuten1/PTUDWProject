var express=require('express')
var router=express.Router()

router.get('/',(req,res,next)=>{
    res.render('editor/edit',{
        layout: 'layout_editor'
    })
})

module.exports=router;