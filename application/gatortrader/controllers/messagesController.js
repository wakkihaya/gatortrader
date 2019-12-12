'use strict';

var MessageModel = require('../models/messageModel.js');

exports.get_messages = function (req,res,next) {

    const login_user_id = '0';
    var user_id = '0'; // In the real case, this user_id will be gotten from userModel,userController

    //These will be stated in userController
//     MessageModel.getUserID(login_user_id,function (err,login_user_id) {
//         if(err){
//             res.send(err);
//         }
//         else{
// //            user_id を送りたい。
//             console.log("useridid" );
//             console.log( login_user_id[0]['user_id'] );
//            // user_id = login_user_id[0]['user_id'];
//             return login_user_id[0]['user_id']
//         }
//         next();
//     });

    MessageModel.getYourSenderMessages(user_id,function (err, messages) {
         if (err) {
             res.send(err);
         }
         else {
             res.locals.messages = messages;
         }
         next();
     });

};