'use strict';

var sql = require('../models/gt_db.js');

// category object constructor
var CategoryModel = function (category) {
    this.category_id = category.category_id;
    this.category_name = category.category_name;
};
CategoryModel.getAllCategories = function (result) {
    sql.query('SELECT * FROM categories', function (err, res) {
        console.log('categoryModel');
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};
CategoryModel.getCategoryById = function (categoryId, result) {
    sql.query('SELECT * FROM categories WHERE category_id=?', categoryId, function (err, res) {
        console.log('categoryModel');
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res);
        }
    });
};

module.exports = CategoryModel;