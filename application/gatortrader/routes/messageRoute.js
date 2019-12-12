var express = require("express");
var router = express.Router();

/* Require controller modules */
var category_controller = require("../controllers/categoryController");
var item_controller = require("../controllers/itemController");
var gatortrader_controller = require("../controllers/gatortraderController");
var message_controller = require("../controllers/messagesController");


/* GET messages page */
router.get(
    "/messages/:item_id",
    message_controller.get_messages,
    category_controller.list_all_categories,
    item_controller.find_item_by_item_id,
    gatortrader_controller.render_messages
);


module.exports = router;