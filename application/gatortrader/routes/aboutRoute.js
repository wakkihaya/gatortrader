var express = require('express');
var router = express.Router();

/* Require controller modules */
var category_controller = require('../controllers/categoryController');
var about_controller = require('../controllers/aboutController');

/* ABOUT GLOBAL MIDDLEWARE */

/* Logger middleware function */
router.use(function (req, res, next) {
    console.log('/about middleware (Logger)');
    console.log('%s %s %s ', req.method, req.baseUrl, req.path);
    next();
});

/* ABOUT ROUTES */

/* GET aboutUs page */
router.get('/',
    category_controller.list_all_categories,
    about_controller.render_aboutUs
);

/* GET aboutAnmol page */
router.get('/Anmol',
    category_controller.list_all_categories,
    about_controller.render_aboutAnmol
);

/* GET aboutAnton page */
router.get('/Anton',
    category_controller.list_all_categories,
    about_controller.render_aboutAnton
);

/* GET aboutDaniel page */
router.get('/Daniel',
    category_controller.list_all_categories,
    about_controller.render_aboutDaniel
);

/* GET aboutGrayson page */
router.get('/Grayson',
    category_controller.list_all_categories,
    about_controller.render_aboutGrayson
);

/* GET aboutHayato page */
router.get('/Hayato',
    category_controller.list_all_categories,
    about_controller.render_aboutHayato
);

/* GET aboutSamjot page */
router.get('/Samjot',
    category_controller.list_all_categories,
    about_controller.render_aboutSamjot
);

/* catch all else past '/about/*' */
router.get('/*',
    category_controller.list_all_categories,
    about_controller.render_aboutUs
);

module.exports = router;
