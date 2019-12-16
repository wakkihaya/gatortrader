var express = require('express');
var router = express.Router();

/* Require controller modules */
var category_controller = require('../controllers/categoryController');
var item_controller = require('../controllers/itemController');
var gatortrader_controller = require('../controllers/gatortraderController');

/* SEARCH GLOBAL MIDDLEWARE */

/* Logger middleware function */
router.use(function (req, res, next) {
    console.log('/search middleware (Logger)');
    console.log('%s %s %s ', req.method, req.baseUrl, req.path);
    console.log('category_id: ', req.query.category);
    console.log('search_term: ', req.query.search);
    next();
});

/* SEARCH ROUTES */

/* GET all search queries from search bar */
router.get('/*',
    category_controller.list_all_categories,
    item_controller.search,
    item_controller.check_if_no_results,
    gatortrader_controller.render_browse
);

router.get('/:user_id/*',
    category_controller.list_all_categories,
    item_controller.search,
    item_controller.check_if_no_results,
    gatortrader_controller.render_login_browse
);


module.exports = router;