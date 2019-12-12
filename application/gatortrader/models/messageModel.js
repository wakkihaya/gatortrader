'use strict';

var sql = require('./gt_db.js');

var MessageModel = function (message) {
    this.room_id = message.room_id;
    this.sender_id = message.sender_id;
    this.recepient_id = message.recepient_id;
    this.message_date = message.message_date;
    this.message_text = message.message_text;
    this.read_flag = message.read_flag;
};

//These will be stated in usersModel
// MessageModel.getUserID = function (login_user_id,result){
//     // get the user_id of login right now.
//     sql.query('SELECT user_id FROM users where user_id =' +login_user_id , function (err,res) {
//         if (err) {
//             console.log('error: ', err);
//         }
//         else {
//             result(null,res);
//         }
//     });
// };

MessageModel.getYourSenderMessages = function (user_id,result) {

    sql.query('SELECT * FROM messages WHERE sender_id =' + user_id, function(err,res){
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log("res"+ res);
            result(null, res);
        }
    });
};

module.exports = MessageModel;