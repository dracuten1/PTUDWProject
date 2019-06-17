var express = require('express');
var categoryModel = require('../Editor/models/category.model');
var moment = require('moment');

var router = express.Router();

router.get('/', (req, res, next) => {
  var limit = 10;
  // var catId = req.params.id;

  var page = req.query.page || 1;
  if (page < 1) page = 1;
  var offset = (page - 1) * limit;
 
  if (isNaN(page)) {
    res.render('error', {layout : false});
    return;
  }

  Promise.all([
    categoryModel.countChecking(),
    categoryModel.pageChecking(limit, offset)
  ]).then(([count_rows, rows]) => {


    var pages = [];
    var total = count_rows[0].total;
    var nPages = Math.floor(total / limit);

    
  
    
    if (total % limit > 0) nPages++;
    for (i = 1; i <= nPages; i++) {
      var active = false;
      if (+page === i) active = true;

      var obj = {
        value: i,
        active
      }
      pages.push(obj);
    }

    var prePage =  parseInt(page) - 1;
    if (prePage <=0 ) prePage = 1

    var nextPage = parseInt(page) + 1;
    if (nextPage > nPages ) nextPage = parseInt(nPages);

    if (rows.length > 0)
    res.render('./home/edit_home', {
      news : rows,
      empty : false,
      pages,
      nextPage,
      prePage,
      layout: 'layout_editor'
      
    })
    else
    res.render('./home/edit_home', {
    
      empty : true,
      layout: 'layout_editor'
    })
  }).catch(next);
  // categoryModel.allCat().then(rows => {

    
  //     if (rows.length > 0) {
  //       res.render('./home/edit_home',
  //             {
  //               empty : false,
  //               news : rows,
  //               layout: 'layout_editor'
  //               })
        
  //     }
  //     else
  //     {
  //       res.render('./home/edit_home',
  //       {
  //         empty : true,
  //         layout: 'layout_editor'
  //         })
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   }).catch(next);
})

router.get('/applied', (req, res, next) => {
  var limit = 10;
  // var catId = req.params.id;

  var page = req.query.page || 1;
  if (page < 1) page = 1;
  var offset = (page - 1) * limit;
 
  if (isNaN(page)) {
    res.render('error', {layout : false});
    return;
  }

  Promise.all([
    categoryModel.countApplied(),
    categoryModel.pageApplied(limit, offset)
  ]).then(([count_rows, rows]) => {


    var pages = [];
    var total = count_rows[0].total;
    var nPages = Math.floor(total / limit);

    
  
    
    if (total % limit > 0) nPages++;
    for (i = 1; i <= nPages; i++) {
      var active = false;
      if (+page === i) active = true;

      var obj = {
        value: i,
        active
      }
      pages.push(obj);
    }

    var prePage =  parseInt(page) - 1;
    if (prePage <=0 ) prePage = 1

    var nextPage = parseInt(page) + 1;
    if (nextPage > nPages ) nextPage = parseInt(nPages);

    if (rows.length > 0)
    res.render('editor/vwCategories/allApplied', {
      news : rows,
      empty : false,
      pages,
      nextPage,
      prePage,
      layout: 'layout_editor'
      
    })
    else
    res.render('editor/vwCategories/allApplied', {
    
      empty : true,
      layout: 'layout_editor'
    })
  }).catch(next);

})

router.get('/denied', (req, res, next) => {
  var limit = 10;
  // var catId = req.params.id;

  var page = req.query.page || 1;
  if (page < 1) page = 1;
  var offset = (page - 1) * limit;
 
  if (isNaN(page)) {
    res.render('error', {layout : false});
    return;
  }

  Promise.all([
    categoryModel.countDenied(),
    categoryModel.pageDenied(limit, offset)
  ]).then(([count_rows, rows]) => {


    var pages = [];
    var total = count_rows[0].total;
    var nPages = Math.floor(total / limit);

    
  
    
    if (total % limit > 0) nPages++;
    for (i = 1; i <= nPages; i++) {
      var active = false;
      if (+page === i) active = true;

      var obj = {
        value: i,
        active
      }
      pages.push(obj);
    }

    var prePage =  parseInt(page) - 1;
    if (prePage <=0 ) prePage = 1

    var nextPage = parseInt(page) + 1;
    if (nextPage > nPages ) nextPage = parseInt(nPages);

    if (rows.length > 0)
    res.render('editor/vwCategories/allDenied', {
      news : rows,
      empty : false,
      pages,
      nextPage,
      prePage,
      layout: 'layout_editor'
      
    })
    else
    res.render('editor/vwCategories/allDenied', {
    
      empty : true,
      layout: 'layout_editor'
    })
  }).catch(next);

})



router.get('/:cat_id', (req, res, next) => {
  var id = req.params.cat_id;
  if (isNaN(id)) {
    res.render('error', {layout : false});
    return;
  }

  var limit = 10;
  // var catId = req.params.id;

  var page = req.query.page || 1;
  if (page < 1) page = 1;
  var offset = (page - 1) * limit;
 
  if (isNaN(page)) {
    res.render('error', {layout : false});
    return;
  }

  Promise.all([
    categoryModel.countByCat(id),
    categoryModel.pageByCat(id, limit, offset)
  ]).then(([count_rows, rows]) => {

    for (const c of res.locals.lcCategories) {
      if (c.id === +id) {
        c.isActive = true;
      }
    }

    var pages = [];
    var total = count_rows[0].total;
    var nPages = Math.floor(total / limit);

    
  
    
    if (total % limit > 0) nPages++;
    for (i = 1; i <= nPages; i++) {
      var active = false;
      if (+page === i) active = true;

      var obj = {
        value: i,
        active
      }
      pages.push(obj);
    }

    var prePage =  parseInt(page) - 1;
    if (prePage <=0 ) prePage = 1

    var nextPage = parseInt(page) + 1;
    if (nextPage > nPages ) nextPage = parseInt(nPages);

    if (rows.length > 0)
    res.render('editor/vwCategories/byCat', {
      news : rows,
      empty : false,
      pages,
      nextPage,
      prePage,
      layout: 'layout_editor'
      
    })
    else
    res.render('editor/vwCategories/byCat', {
    
      empty : true,
      layout: 'layout_editor'
    })
  }).catch(next);

})

router.get('/:cat_id/edit/:id', (req, res) => {
  var id = req.params.id;
  var catId = req.params.cat_id;

  if (isNaN(id) || isNaN(catId)) {
    res.render('error', {layout : false});
    return;
  }


  categoryModel.single(id).then( rows => {
    
    for (const c of res.locals.lcCategories) {
      if (c.id === +catId) {
        c.isActive = true;
      }
    }
   
    
    if (rows.length > 0) {
      res.render('editor/vwNews/edit',
            {
              error : false,
              news : rows[0],
              layout: 'layout_editor'
              })
    }
    else
    {
      res.render('editor/vwNews/edit',
      {
        error : true,
        layout: 'layout_editor'
        })
    }
  }
  )
})

router.get('/onlyread/:id', (req, res) => {
  var id = req.params.id;
  // var catId = req.params.cat_id;

  if (isNaN(id)) {
    res.render('error', {layout : false});
    return;
  }


  categoryModel.single(id).then( rows => {

    if (rows.length > 0) {
      res.render('editor/vwNews/onlyRead',
            {
              error : false,
              news : rows[0],
              layout: 'layout_editor'})
    }
    else
    {
      res.render('editor/vwNews/onlyRead',
      {
        error : true,
        layout: 'layout_editor'
        })
    }
  }
  )
})

router.get('/newApplied/:id', (req, res) => {
  var id = req.params.id;
  // var catId = req.params.cat_id;

  if (isNaN(id)) {
    res.render('error', {layout : false});
    return;
  }


  categoryModel.single(id).then( rows => {
    
    if (rows.length > 0) {
      res.render('editor/vwNews/newApplied',
            {
              error : false,
              news : rows[0],
              layout: 'layout_editor'})
    }
    else
    {
      res.render('editor/vwNews/newApplied',
      {
        error : true,
        layout: 'layout_editor'
        })
    }
  }
  )
})

router.get('/newDenied/:id', (req, res) => {
  var id = req.params.id;
  // var catId = req.params.cat_id;
  
  
  if (isNaN(id)) {
    res.render('error', {layout : false});
    return;
  }


  categoryModel.single(id).then( rows => {
   
    
    if (rows.length > 0) {
      res.render('editor/vwNews/newDenied',
            {
              error : false,
              news : rows[0],
              layout: 'layout_editor'})
    }
    else
    {
      res.render('editor/vwNews/newDenied',
      {
        error : true,
        layout: 'layout_editor'
        })
    }
  }
  )
})

router.post('/:cat_id/apply/:id', (req, res) => {

   var catId = req.params.cat_id;
   var id = req.params.id;
   var dpb = moment(req.body.date_publish, 'DD/MM/YYYY').format('YYYY-MM-DD');
  
   
  categoryModel.updateStatus(id, 2, dpb)
    .then(n => 
      {
        
        res.redirect(`/editor/${catId}`);


    }).catch(err => {
      console.log(err);
    })
})

router.post('/:cat_id/deny/:id', (req, res) => {
  var catId = req.params.cat_id;
  var id = req.params.id;

  var reason = "'" +req.body.reason + "'";
  var dpb;

 categoryModel.updateStatus(id, 3, dpb)
   .then(n => 
     { 
        res.redirect(`/editor/${catId}`);
     

   }).catch(err => {
     console.log(err);
   })
   categoryModel.updateReason(id, reason)
    .catch(err => {
     console.log(err);
   })
  
})

module.exports = router;