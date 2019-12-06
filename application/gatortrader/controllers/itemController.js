'use strict';

var ItemModel = require('../models/itemModel.js');

exports.list_all_items = function (req, res, next) {
    ItemModel.getAllItems(function (err, items) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(items);
            res.locals.items = items;
        }
        next();
    });
};

exports.find_item_by_item_id = function (req, res, next) {
    ItemModel.getItemByItemId(req.params.item_id, function (err, item) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else{
            console.log(item);
            res.locals.item = item;
        }
        next();
    });
};

exports.list_items_by_category_id = function (req, res, next) {
    ItemModel.getItemsByCategoryId(req.params.category_id, function (err, items) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(items);
            res.locals.items = items;
        }
        next();
    });
};

exports.list_items_of_user_id = function (req, res, next) {
    ItemModel.getItemsByUserId(req.params.user_id, function (err, items) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else {
            console.log('res', items);
            res.send(items);
        }
        next();
    });
};

exports.list_items_by_text = function (req, res, next) {
    ItemModel.getItemsBySearchTerm(req.params.search_term, function (err, items) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(items);
            res.locals.items = items;
        }
        next();
    });
};

exports.list_items_by_category_id_text = function (req, res, next) {
    ItemModel.getItemsByCategoryIdSearchTerm(req.params.category_id, req.params.search_term, function (err, items) {
        console.log('itemController');
        if (err) {
            res.send(err);
        }
        else {
            console.log(items);
            res.locals.items = items;
        }
        next();
    });
};

exports.search = function (req, res, next) {
    if (req.query.category === '' && req.query.search === '') {
        ItemModel.getAllItems(function (err, items) {
            console.log('itemController, search: [empty]');
            if (err) {
                res.send(err);
            }
            else {
                console.log(items);
                res.locals.items = items;
            }
            next();
        });
    } else if (req.query.category !== '' && req.query.search === '') {
        ItemModel.getItemsByCategoryId(req.query.category, function (err, items) {
            console.log('itemController, search: category_id');
            if (err) {
                res.send(err);
            }
            else {
                console.log(items);
                res.locals.items = items;
            }
            next();
        });
    } else if (req.query.category === '' && req.query.search !== '') {
        ItemModel.getItemsBySearchTerm(req.query.search, function (err, items) {
            console.log('itemController, search: search_term');
            if (err) {
                res.send(err);
            }
            else {
                console.log(items);
                res.locals.items = items;
            }
            next();
        });
    } else {
        ItemModel.getItemsByCategoryIdSearchTerm(req.query.category, req.query.search, function (err, items) {
            console.log('itemController, search: category_id search_term');
            if (err) {
                res.send(err);
            }
            else {
                console.log(items);
                res.locals.items = items;
            }
            next();
        });
    }
};

exports.check_if_no_results = function (req, res, next) {
    console.log('itemController, check if no results');
    console.log(res.locals.items);
    if (!(res.locals.items) || res.locals.items.length === 0) {
        ItemModel.getAllItems(function (err, items) {
            console.log('no results');
            if (err) {
                res.send(err);
            }
            else {
                console.log(items);
                res.locals.items = items;
            }
            next();
        });
    } else {
        next();
    }

};

exports.newItems = function (req,res,next) {
    var itemName = req.body.itemName;
    var itemCategory = req.body.itemCategory;
    var itemCost = req.body.itemCost;
    var itemDescription = req.body.itemDescription;

    console.log("itemcate"+ itemCategory);
    //Actually,pull user ID from Login information.
    var userID =5;

    console.log("file"+ req.files);

    //about image
    var file = req.file;
    var itemImage = file.filename;
    
    ItemModel.insertNewItems(itemName,itemCategory,itemCost,itemDescription,userID,itemImage,function (err) {
        if (err) {
            res.send(err);
        }
        res.redirect('index');
    });


    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     res.render("new",{messages: errors.array()});
    // }else {
    //     var query = 'INSERT INTO items (item_name, description, image, category_id, price, user_id) values ("' + itemName + '",' + '"' + itemDescription + '",' + '"' + itemImage + '",' + '"' + itemCategory + '",' + '"' + itemCost + '",' + '"' + userID + '")';
    //     database.query(query, function (err, rows) {
    //         res.redirect('/index');
    //     });
   // }

};