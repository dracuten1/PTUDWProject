var categoryModel = require('../models/category.model');

module.exports = (req, res, next) => {
  categoryModel.allUnknow().then(rows => {
    res.locals.lcUnknow = rows;
    next();
  })
}