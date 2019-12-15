'use strict';

var MessageModel = require('../models/messageModel.js');

exports.get_messages = function (req,res,next) {

    const login_user_id = '0';
    var user_id = '0'; // In the real case, this user_id will be gotten from userModel,userController

    MessageModel.getYourSenderMessages(user_id,function (err, messages) {
         if (err) {
             res.send(err);
         }
         else {
             res.locals.senderMessages = messages;
         }
         next();
     });

    MessageModel.getYourRecepientMessages(user_id,function (err, messages) {
        if (err) {
            res.send(err);
        }
        else {
            res.locals.recepientMessages = messages;
        }
        next();
    });

};