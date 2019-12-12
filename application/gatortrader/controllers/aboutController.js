'use strict';

/* Render aboutUs view */
exports.render_aboutUs = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutUs', viewData);
};

/* Render aboutAnmol view */
exports.render_aboutAnmol = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutAnmol', viewData);
};

/* Render aboutAnton view */
exports.render_aboutAnton = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutAnton', viewData);
};

/* Render aboutDaniel view */
exports.render_aboutDaniel = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutDaniel', viewData);
};

/* Render aboutGrayson view */
exports.render_aboutGrayson = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutGrayson', viewData);
};

/* Render aboutHayato view */
exports.render_aboutHayato = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutHayato', viewData);
};

/* Render aboutSamjot view */
exports.render_aboutSamjot = function (req, res) {
    console.log('aboutController');
    console.log(res.locals.categories);
    var viewData = {categories : res.locals.categories};
    res.render('pages/about/aboutSamjot', viewData);
};