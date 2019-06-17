var express = require("express");
var router = express.Router();
var dateFormat = require("dateformat");
var blogModule = require("../modules/blog_module");
var statusModule = require("../modules/status_module");
var categoryModule = require("../modules/category_module");
var router_uploadImg = require("./uploadImg.router");

router.get("/", (req, res, next) => {
  console.log("get params");
  console.log(req.query);
  var selectedStatus = req.query.status || 0;
  var promise;
  var currentStatus = 0;
  if (+selectedStatus !== 0) {
    currentStatus = +selectedStatus;
    console.log("get by status");
    promise = Promise.all([statusModule.all(), blogModule.select_by_writerId_status(1, currentStatus)]);
  } else {
    console.log("get all");
    promise = Promise.all([statusModule.all(), blogModule.select_by_writerId(1)]);
  };

  promise.then(([status, rows]) => {
      //console.log(status);
      //console.log(rows);
      status.push({
        id: 0,
        name: "Tát cả trạng thái",
      });
      status.forEach(s => {
        s.selected = false;
        if (+s.id === currentStatus) {
          s.selected = true;
        }
      });
      rows.forEach(element => {
        element.date_publish = dateFormat(element.date_publish, "dd/mm/yyyy");
        element.edit = true;
        if (+element.status === 2 || +element.status === 4) element.edit = false;

        function findStatus(s) {
          if (+s.id === +element.status) return s;
        }
        element.status = status.find(findStatus).name;
        //console.log(rows);
      });
      res.render("writer/home", {
        blogs: rows,
        stas: status,
        layout: "layout_writer"
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/editblogs/:id", (req, res, next) => {
  console.log("edit hello");
  var id = req.params.id;
  if (isNaN(id)) {
    res.render("/writer", {
      error: true
    });
    return;
  }
  Promise.all([categoryModule.w_all(), blogModule.select(id)]).then(([cateArr, rows]) => {
      if (rows.length > 0 && rows[0].writer_id == 1 && rows[0].status != 2) {
        cateArr.forEach(c => {
          c.currentCategory = false;
          if (rows[0].category_id == c.id) {
            c.currentCategory = true;
          }
        })
        res.render("writer/editblogs", {
          categories: cateArr,
          error: false,
          layout: "layout_writer",
          blog: rows[0]
        });
      } else {
        res.render("/writer", {
          error: true
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
});
router.post("/editblogs", (req, res, next) => {
  console.log("post edit blog");
  var newBlog = {
    id_blog: req.body.id,
    summary: req.body.summary,
    tag: req.body.tag,
    link_img: req.body.imgLink,
    title: req.body.title,
    content: req.body.editor1,
    writer_id: 1,
    status: 1,
    category_id: +req.body.category
  };
  console.log(newBlog);
  blogModule
    .update(newBlog)
    .then(id => {
      console.log(id);
      res.redirect("/writer");
    })
    .catch(err => {
      console.log(err);
    });
});
router.post("/addblogs", (req, res, next) => {
  console.log("post add blog");
  //console.log(req.body);
  var newBlog = {
    summary: req.body.sumary,
    tag: req.body.tag,
    link_img: req.body.imgLink,
    title: req.body.title,
    content: req.body.editor1,
    writer_id: 1,
    status: 1,
    category_id: +req.body.category
  };
  console.log(newBlog);
  blogModule
    .add(newBlog)
    .then(id => {
      console.log(id);
      res.redirect("/writer");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/addblogs", (req, res, next) => {
  var categorySelector = categoryModule.w_all();
  var cateArr = Array;
  categorySelector
    .then(c => {
      cateArr = c;
      defautlCategory = cateArr.shift();
      console.log(cateArr);
      res.render("writer/addblogs", {
        firstCat: defautlCategory,
        categories: cateArr,
        layout: "layout_writer"
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/delete/:id", (req, res, next) => {
  var id = req.params.id;
  if (isNaN(id)) {
    res.render("/views/writer/home.hbs", {
      error: true
    });
    return;
  }
  blogModule
    .delete(id)
    .then(result => {
      res.redirect("/writer");
    })
    .catch(err => {
      console.log(err);
      res.render("/views/writer/home.hbs", {
        error: true
      });
    });
});
router.use("/uploadImg", router_uploadImg);

module.exports = router;