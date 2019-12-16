"use strict";

/* Render index view */
exports.render_index = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.categories);
  var viewData = {
    categories: res.locals.categories,
    items: res.locals.items
  };
  res.render("pages/gatortrader/index", viewData);
};

exports.render_login_index = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.categories);
  var viewData = {
    categories: res.locals.categories,
    items: res.locals.items
  };
  res.render("pages/gatortrader/login_index", viewData);
};

/* Render browse view */
exports.render_browse = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.items);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    items: res.locals.items
  };
  res.render("pages/gatortrader/browse", viewData);
};

exports.render_login_browse = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.items);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    items: res.locals.items
  };
  res.render("pages/gatortrader/login_browse", viewData);
};

/* Render item_listing view */
exports.render_item_listing = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.item);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    item: res.locals.item
  };
  res.render("pages/gatortrader/item_listing", viewData);
};

/* Render sell view */
exports.render_new = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.categories);
  var viewData = {
    categories: res.locals.categories
  };
  res.render("pages/gatortrader/new", viewData);
};

/* Render signIn view */
exports.render_signIn = function(req, res) {
  console.log("gatortraderController");
  res.render("pages/gatortrader/signIn");
};

/* Render registration view */
exports.render_registration = function(req, res) {
  console.log("gatortraderController");
  res.render("pages/gatortrader/registration");
};

/* Render messages view */
exports.render_messages = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.item);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    item: res.locals.item
  };
  res.render("pages/gatortrader/messages", viewData);
};

/* Render your_listings view */
exports.render_your_listings = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.item);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    item: res.locals.item
  };
  res.render("pages/gatortrader/your_listings", viewData);
};

exports.render_login_item_listing = function(req, res) {
  console.log("gatortraderController");
  console.log(res.locals.item);
  var viewData = {
    category_id: req.query.category,
    searchTerm: req.query.search,
    categories: res.locals.categories,
    item: res.locals.item
  };
  res.render("pages/gatortrader/login_item_listing", viewData);
};
