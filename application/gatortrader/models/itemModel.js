'use strict';

var sql = require('./gt_db.js');

// item object constructor
var ItemModel = function (item) {
    this.item_id = item.item_id;
    this.user_id = item.user_id;
    this.category_id = item.category_id;
    this.item_name = item.item_name;
    this.description = item.description;
    this.image_path = item.image_path;
    this.price = item.price;
    this.date_created = item.date_created;
    this.in_stock = item.in_stock;
};
ItemModel.getAllItems = function (result) {
    console.log('itemModel');
    sql.query('SELECT * FROM items ORDER BY date_created DESC', function (err, res) {
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
ItemModel.getItemByItemId = function (itemId, result) {
    console.log('itemModel');
    sql.query('SELECT * FROM items WHERE item_id=?', itemId, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log('item: ', res);
            result(null, res);
        }
    });
};
ItemModel.getItemsByCategoryId = function (categoryId, result) {
    console.log('itemModel');
    sql.query('SELECT * FROM items WHERE category_id=? ORDER BY date_created DESC', categoryId, function (err, res)  {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log('items: ', res);
            result(null, res);
        }
    });
};
ItemModel.getItemsByUserId = function (userId, result) {
    console.log('itemModel');
    sql.query('SELECT * FROM items WHERE user_id=?', userId, function (err, res)  {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log('items: ', res);
            result(null, res);
        }
    });
};

ItemModel.getItemsBySearchTerm = function (searchTerm, result) {
    console.log('itemModel');
    var query = "SELECT * FROM items WHERE item_name LIKE '%" +
        searchTerm +
        "%' OR description LIKE '%" +
        searchTerm +
        "%'";
    sql.query(query, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log('items: ', res);
            result(null, res);
        }
    });
};

ItemModel.getItemsByCategoryIdSearchTerm = function (categoryId, searchTerm, result) {
    console.log('itemModel');
    var query = "SELECT * FROM items WHERE category_id = " +
        categoryId +
        " AND (item_name LIKE '%" +
        searchTerm +
        "%' OR description LIKE '%" +
        searchTerm +
        "%')";
    sql.query(query, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log('items: ', res);
            result(null, res);
        }
    });
};

ItemModel.insertNewItems = function(itemName,itemCategory,itemCost,itemDescription,userID,itemImage,result){
    console.log("item"+ itemName);
    var query = 'INSERT INTO items (item_name, description, image, category_id, price, user_id) values ("' +
        itemName + '",' + '"' + itemDescription + '",' + '"' + itemImage + '",' + '"' +
        itemCategory + '",' + '"' + itemCost + '",' + '"' + userID + '")';
    sql.query(query, function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = ItemModel;