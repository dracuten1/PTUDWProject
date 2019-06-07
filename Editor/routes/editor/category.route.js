var express = require('express');
var categoryModel = require('../../models/category.model');

var router = express.Router();

router.get('/', (req, res) => {
  // categoryModel.all().then(rows => {
  //   res.render('home');
  // }).catch(err => {
  //   console.log(err);
  // })
  categoryModel.allCat().then(rows => {

    if (rows.length > 0) {
      res.render('home',
            {
              empty : false,
              news : rows})
    }
    else
    {
      res.render('home',
      {
        empty : true,
        })
    }
    // res.render('editor/vwCategories/byCat', 
    // {news : rows
    // });
  }).catch(err => {
    console.log(err);
  })
})

router.get('/:cat_id/edit/:id', (req, res) => {
  var id = req.params.id;
  var catId = req.params.cat_id;
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

router.get('/:cat_id', (req, res) => {
  var id = req.params.cat_id;
  categoryModel.allByCat(id).then(rows => {

    for (const c of res.locals.lcCategories) {
      if (c.id === +id) {
        c.isActive = true;
      }
    }
    if (rows.length > 0) {
      res.render('editor/vwCategories/byCat',
            {
              empty : false,
              news : rows})
    }
    else
    {
      res.render('editor/vwCategories/byCat',
      {
        empty : true,
        })
    }
    // res.render('editor/vwCategories/byCat', 
    // {news : rows
    // });
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;