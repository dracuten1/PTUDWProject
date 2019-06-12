var express = require('express');
var categoryModel = require('../../models/category.model');

var router = express.Router();

router.get('/', (req, res, next) => {
  categoryModel.allCat().then(rows => {

    
      if (rows.length > 0) {
        res.render('home',
              {
                empty : false,
                news : rows,
                })
                // layout: 'main2.hbs'
      }
      else
      {
        res.render('home',
        {
          empty : true,
          })
      }
    }).catch(err => {
      console.log(err);
    }).catch(next);
  // res.render('home');
})

router.get('/applied', (req, res, next) => {
  categoryModel.allApplied().then(rows => {

    
    if (rows.length > 0) {
      res.render('editor/vwCategories/allApplied',
            {
              empty : false,
              news : rows,})
    }
    else
    {
      res.render('editor/vwCategories/allApplied',
      {
        empty : true,
        })
    }
  }).catch(err => {
    console.log(err);
  }).catch(next);
})

router.get('/denied', (req, res, next) => {
  categoryModel.allDenied().then(rows => {

    
    if (rows.length > 0) {
      res.render('editor/vwCategories/allDenied',
            {
              empty : false,
              news : rows,})
    }
    else
    {
      res.render('editor/vwCategories/allDenied',
      {
        empty : true,
        })
    }
  }).catch(err => {
    console.log(err);
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
      prePage
      
    })
    else
    res.render('editor/vwCategories/byCat', {
    
      empty : true,
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
              news : rows[0]})
    }
    else
    {
      res.render('editor/vwNews/edit',
      {
        error : true,
        })
    }
  }
  )
})

router.get('/:cat_id/onlyread/:id', (req, res) => {
  var id = req.params.id;
  var catId = req.params.cat_id;

  if (isNaN(id) || isNaN(catId)) {
    res.render('error', {layout : false});
    return;
  }


  categoryModel.single(id).then( rows => {

    if (rows.length > 0) {
      res.render('editor/vwNews/onlyRead',
            {
              error : false,
              news : rows[0]})
    }
    else
    {
      res.render('editor/vwNews/onlyRead',
      {
        error : true,
        })
    }
  }
  )
})

router.post('/:cat_id/apply/:id', (req, res) => {
   var catId = req.params.cat_id;
   var id = req.params.id;
  categoryModel.updateStatus(id, 2)
    .then(n => 
      {
        res.redirect(`/${catId}`);


    }).catch(err => {
      console.log(err);
    })
})

router.post('/:cat_id/deny/:id', (req, res) => {
  var catId = req.params.cat_id;
  var id = req.params.id;
 categoryModel.updateStatus(id, 3)
   .then(n => 
     { 
        res.redirect(`/${catId}`);
     

   }).catch(err => {
     console.log(err);
   })
})

module.exports = router;