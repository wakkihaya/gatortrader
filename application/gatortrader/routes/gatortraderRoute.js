var express = require('express');
var router = express.Router();

/* Require controller modules */
var category_controller = require('../controllers/categoryController');
var item_controller = require('../controllers/itemController');
var gatortrader_controller = require('../controllers/gatortraderController');

var path = require("path");

const multer = require('multer');
const uploadDir = multer({dest: 'public/.upload'});



/* Logger middleware function */
router.use(function (req, res, next) {
  console.log('/ middleware (Logger)');
  console.log('%s %s %s ', req.method, req.baseUrl, req.path);
  next();
});

/* GATORTRADER GET ROUTES */
/*for validation*/
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
router.use(bodyParser.json({
  limit: '50mb'
}));

/* GET home page */
router.get('/',
    category_controller.list_all_categories,
    item_controller.list_all_items,
    gatortrader_controller.render_index
);
router.get('/index',
    category_controller.list_all_categories,
    item_controller.list_all_items,
    gatortrader_controller.render_index
);

/* GET new item page */
router.get('/new',
    category_controller.list_all_categories,
    gatortrader_controller.render_new
);

/* GET signIn page */
router.get('/signIn',
    gatortrader_controller.render_signIn
);

/* GET registration page */
router.get('/registration',
    gatortrader_controller.render_registration
);

/* GET item_listing page */
router.get('/item_listing/:item_id',
    category_controller.list_all_categories,
    item_controller.find_item_by_item_id,
    gatortrader_controller.render_item_listing
);

/* GATORTRADER POST ROUTES */

/* POST new item */


router.post('/new',
    uploadDir.single('itemImage'),
      //item_controller.validate('createItem'),
      item_controller.newItems
    );

module.exports = router;
