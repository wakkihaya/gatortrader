'use strict';

var CategoryModel = require('../models/categoryModel.js');

exports.list_all_categories = function (req, res, next) {
    CategoryModel.getAllCategories(function (err, categories) {
        console.log('categoryController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(categories);
            res.locals.categories = categories;
        }
        next();
    });
};

exports.read_a_category = function (req, res, next) {
    CategoryModel.getCategoryById(req.params.category_id, function (err, category) {
        console.log('categoryController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(category);
            res.locals.category = category;
        }
        next();
    });
};