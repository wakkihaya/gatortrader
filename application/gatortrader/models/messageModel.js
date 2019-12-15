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

MessageModel.getYourSenderMessages = function (user_id,room_id,result) {

    sql.query('SELECT * FROM messages WHERE sender_id =' + user_id + ' and room_id = ' + room_id , function(err,res){
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

MessageModel.getYourRecepientMessages = function (user_id,room_id,result) {

    sql.query('SELECT * FROM messages WHERE recepient_id =' + user_id + ' and room_id = ' + room_id , function(err,res){
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

MessageModel.getSenderId = function(room_id, result){
    sql.query('SELECT sender_id FROM messages WHERE room_id = '+ room_id, function (err,res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log("res"+ res);
            result(null, res);
        }
    })
};

MessageModel.postMessage = function(user_id,room_id,sender_id,msg_text, result){
    sql.query("INSERT INTO messages (room_id,sender_id,recepient_id,message_text, read_flag) values (" + room_id + ',' + sender_id + ',' + user_id + ",'"+ msg_text + "',0)" , function (err,res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log("res"+ res);
            result(null, res);
        }
    })
};

module.exports = MessageModel;