'use strict';

var MessageModel = require('../models/messageModel.js');

exports.get_messages = function (req,res,next) {

    const login_user_id = '0';
    var user_id = '0'; // In the real case, this user_id will be gotten from userModel,userController

    MessageModel.getYourSenderMessages(req.params.item_id,req.params.room_id,function (err, messages) {
         if (err) {
             res.send(err);
         }
         else {
             res.locals.senderMessages = messages;
         }
         next();
     });

    MessageModel.getYourRecepientMessages(req.params.item_id,req.params.room_id,function (err, messages) {
        if (err) {
            res.send(err);
        }
        else {
            res.locals.recepientMessages = messages;
        }
        next();
    });

};

exports.post_messages = function (req,res,next) {
    var msg_text = req.body.message_text;
    var sender_id =0;

    MessageModel.postMessage(req.params.item_id, req.params.room_id, sender_id ,msg_text,function (err, messages) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect("/messages/"+req.params.item_id + '/' + req.params.room_id);
        }
        next();
    });
};

exports.get_messageslist = function (req,res,next) {
    MessageModel.get_info_room_id(req.params.item_id,function (err,msglist) {
        if (err) {
            console.log("error here?");
            res.send(err);
        }
        else {
            console.log("msg");
            console.log(msglist);
            res.locals.msglist = msglist;
        }
        next();
    });
};