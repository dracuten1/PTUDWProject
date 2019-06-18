var express = require('express')
var router = express.Router();
var dateFormat = require('dateformat');
var blogModule = require('../modules/blog_module');


router.get('/', (req, res, next) => {
    var popular = [];
    var popular1 = [];
    var mostview = [];
    var mostview1 = [];
    var mostviewrow1 = [];
    var mostviewrow2 = [];
    var newblogs = [];
    var topcategory = [];
    var p = blogModule.all();
    p.then(rows => {
        rows.forEach(element => {
            if (element.id_part == 1) popular.push(element);
            if (element.id_part == 2) mostview.push(element);
            if (element.id_part == 3) newblogs.push(element);
            if (element.id_part == 4) topcategory.push(element);
            element.date_publish = dateFormat(element.date_publish, "hh:mm dd/mm/yyyy");
        });
    
        popular1.push(popular[0]);
        popular.shift();
        mostview1.push(mostview[0]);
        mostview.shift();

        console.log(mostviewrow1);

        res.render('home/home.hbs', {
            close:false,
            popular1: popular1,
            popular: popular,
            mostview1:mostview1,
            mostview:mostview,
            newblogs: newblogs,
            topcategory: topcategory
        });
    }).catch(err => {
        console.log(err);
    })
})

router.get('/home', (req, res, next) => {
    var popular = [];
    var popular1 = [];
    var mostview = [];
    var mostview1 = [];
    var mostviewrow1 = [];
    var mostviewrow2 = [];
    var newblogs = [];
    var topcategory = [];
    var p = blogModule.all();
    p.then(rows => {
        rows.forEach(element => {
            if (element.id_part == 1) popular.push(element);
            if (element.id_part == 2) mostview.push(element);
            if (element.id_part == 3) newblogs.push(element);
            if (element.id_part == 4) topcategory.push(element);
            element.date_publish = dateFormat(element.date_publish, "hh:mm dd/mm/yyyy");
        });
    
        popular1.push(popular[0]);
        popular.shift();
        mostview1.push(mostview[0]);
        mostview.shift();

        res.render('home/home.hbs', {
            close:false,
            popular1: popular1,
            popular: popular,
            mostview1:mostview1,
            mostview:mostview,
            newblogs: newblogs,
            topcategory: topcategory
        });
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;