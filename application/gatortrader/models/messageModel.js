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

//where で制限し取得したroom_id の一番新しいもののみを取得する。

MessageModel.get_info_sender_room_id = function(user_id,result){
  sql.query("SELECT * from messages where sender_id = " + user_id +  " AND message_date in (select max(message_date) FROM messages WHERE sender_id = " + user_id +  " OR recepient_id = " + user_id + " group by room_id) ORDER BY message_date DESC",function (err,res) {
      if (err) {
          console.log('error: ', err);
          result(err, null);
      }
      else {
          console.log("res"+ res);
          result(null, res);
      }
  } );
};

MessageModel.get_info_recepient_room_id = function(user_id,result){
    sql.query("SELECT * from messages where recepient_id = " + user_id + " AND message_date in (select max(message_date) FROM messages WHERE recepient_id = " + user_id + " OR sender_id = " + user_id + " group by room_id) ORDER BY message_date DESC",function (err,res) {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        }
        else {
            console.log("res"+ res);
            result(null, res);
        }
    } );
};

module.exports = MessageModel;