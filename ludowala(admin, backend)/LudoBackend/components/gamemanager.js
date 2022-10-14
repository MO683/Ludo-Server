var roomInfo = require('./roominfo');
var bot = require('./addbot');



var conndb = null;

exports.init = function(db){
    conndb = db;
}


exports.joinPlayer = function(user_id, room_id, member){
    var addBot = true;
    var botNumber = 0;

    var my_room_id = roomInfo.get_empty_room(user_id, room_id, member);
    
    if(my_room_id == -1)
        my_room_id = roomInfo.set_room_info(user_id, room_id, member);

    if(roomInfo.get_room_status(roomInfo.get_roomlist_index(my_room_id)))
    {
        addBot = false;
    }
    
    if(addBot)
    {
        botNumber = roomInfo.get_emptyplace_count(roomInfo.get_roomlist_index(my_room_id));
    }
    roomInfo.set_bot_count(roomInfo.get_roomlist_index(my_room_id), botNumber);

    return my_room_id;
}

exports.login_room = function(data, socket){
    
    
    var query = conndb.query('SELECT * FROM room_info WHERE id='+data['room_id']);
    var room_type = data['member'];

    query
    .on('error', function(err) {
        console.log(err);
    })
    .on('result', function(room) {
        room.user_amount++;

        var sqlquery = 'UPDATE room_info SET user_amount='+room.user_amount+' WHERE id=' + data['room_id'];
        conndb.query(sqlquery);
    });

    var room_index;

    if(room_type == 1)
    {
        room_index = roomInfo.set_room_info(data['user_id'], data['room_id'], 5);
        roomInfo.set_empty_false(room_index);
    }
    else{
        room_index = this.joinPlayer(data['user_id'], data['room_id'], data['member']);
    }
    
    var sqlquery = "UPDATE user_info SET room_id='"+room_index+"' WHERE id=" + data['user_id'];
    conndb.query(sqlquery);
    var sendIndex = {
        roomIndex:"" + room_index
    };
    socket.emit("ENTERROOM_RESULT", sendIndex);
    
}


exports.get_opponent = function(data, socket){
    var bot_cnt = roomInfo.get_bot_count(roomInfo.get_roomlist_index(data['room_id']));
    var user_array = [];

    while(bot_cnt != 0)
    {
        var bot_index = bot.set_bot_info(data['room_id']);
        var senddata = JSON.parse('{"id":"'+
                                    bot.get_bot_id(bot_index)+'","nickname":"GUEST'+
                                    Math.floor(Math.random() * (999999 - 100000) + 100000)+'","avatar":"'+
                                    (Math.floor(Math.random() * Math.floor(20)) + 1) +'"}');
        //var senddata = {
        //    id:bot.get_bot_id(bot_index),
        //    nickname:"Guest" + Math.floor(Math.random() * (999999 - 100000) + 100000),
        //    avatar:bot_cnt + 10
        //};
        //console.log(senddata);
        //console.log("SEND TO CLIENT FOR PLAY GAME1 : " + bot.get_bot_id(bot_index));
        //socket.emit("GETOPPONENET_RESULT", senddata);
        user_array.push(senddata);
        bot_cnt--;
    }

    var res = conndb.query("SELECT * FROM user_info WHERE room_id='" + data["room_id"] + "'");
    res
    .on('error', function(err){
        console.log(err);
    })
    .on('result', function(user){
        var sendData = JSON.parse('{"id":"'+user.id+'","nickname":"'+user.nickname+'","avatar":"'+user.avatar+'"}');

        //var sendData = {
        //    id: user.id,
        //    nickname: user.nickname,
        //    avatar: user.avatar
        //};
        //console.log("SEND TO PLAYER FOR PLAY GAME2 : " + sendData.nickname);
        user_array.push(sendData);
        console.log("NAME : " + user.nickname + " : AVATAR : " + user.avatar);
        //socket.emit("GETOPPONENET_RESULT", sendData);
        //socket.broadcast.emit(sendData);
    })
    .on('end', function(){
        roomInfo.set_empty_false(data['room_id']);
        var send_data = {
            result:'success',
            cnt:user_array.length,
            data:user_array
        } 
        socket.emit("GETOPPONENET_RESULT", send_data);
    })
}

exports.start_game = function(data, socket){

    var room_id = data['room_id'];
    console.log("START GAME Get ROOM LIST INDEX : " + roomInfo.get_roomlist_index(room_id) + " ROOM ID : " + room_id + " USER ID : " + data['user_id']);
    roomInfo.increase_ready_count(roomInfo.get_roomlist_index(room_id));
    
    
    if(roomInfo.get_all_ready(roomInfo.get_roomlist_index(room_id)))
    {
        var admin_coin = parseInt(data['admin_coin']);
        var date = new Date();
        var total_amount = [];
        var cur_total = 0;
        var admin_query = conndb.query("SELECT * FROM admin_wallet");
        admin_query
        .on('error', function(err){
            console.log(err);
        })
        .on('result', function(wallet){
            total_amount.push(wallet.total_amount);
        })
        .on('end', function(){
            if(total_amount.length == 0)
            {
                total_amount.push(0);
            }
            //console.log("TOTAL AMOUNT : " + total_amount[total_amount.length - 1] + " LENGTH : " + total_amount.length + " DATE : " + date );
            cur_total =  parseInt(total_amount[total_amount.length - 1]);
            cur_total += admin_coin;
            //console.log("TOTAL AMOUNT : " + cur_total);
            conndb.query("INSERT INTO admin_wallet (add_amount, total_amount, date) VALUES ("+admin_coin+","+cur_total+",'"+date+"')");
        });



        //console.log("Get All Ready Players");
        var sendData = {
            roomId:room_id
        };
        socket.emit("START_GAME_RESULT", sendData);
    }
    
}

exports.roll_dice = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        value:data['value'],
        curPlayerIndex:data['currentPlayer'],
        event:50//roll dice
    };
    socket.broadcast.emit("GAME_EVENT", sendData);
}


exports.make_move = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        value:data['value'],
        curPlayerIndex:data['currentPlayer'],
        index:data['index'],
        event:51//make move
    };
    socket.broadcast.emit("GAME_EVENT", sendData);
}


exports.remove_pawn = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        curPlayerIndex:data['currentPlayer'],
        index:data['index'],
        event:52//remove pawn
    };
    socket.broadcast.emit("GAME_EVENT", sendData);
}

exports.finish_turn = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        index:data['index'],
        event:172//NEXT TRUN
    };
    socket.broadcast.emit("LOGIC_EVENT", sendData);
}


exports.chat_send = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        index:data['index'],
        userId:data['user_id'],
        event:175//CHAT SEND
    };
    socket.broadcast.emit("LOGIC_EVENT", sendData);
}


exports.chat_emoji_send = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        index:data['index'],
        userId:data['user_id'],
        event:176//EMIJI SEND
    };
    socket.broadcast.emit("LOGIC_EVENT", sendData);
}


exports.finished_game = function(data, socket){
    var sendData = {
        roomId:data['room_id'],
        userId:data['user_id'],
        event:178//FINISHED GAME
    };
    socket.broadcast.emit("LOGIC_EVENT", sendData);
}



exports.minus_coin = function(data, socket){
    var user_id = data['user_id'];
    var cur_coin = data['cur_coin'];
    var sqlquery = "UPDATE user_info SET money=" + cur_coin + " WHERE id="+user_id;
    var res = conndb.query(sqlquery);

    res
    .on('error', function(err){
        console.log(err);
    })
    .on("result", function(room){
        //console.log("UPDATE USER" + user_id +" COIN");
    });

}


exports.update_user_info = function(data)
{
    var id = data['id'];
    var nickname = data['nickname'];
    var money = data['coins'];

    var sqlquery = "Update user_info SET money=" + 
                    money + ",nickname='"+
                    nickname+"' WHERE id="+id;
    conndb.query(sqlquery);
}


exports.delete_user_from_room = function(user_id, socket){
    
    conndb.query("UPDATE user_info SET room_id = '' WHERE id = " + user_id);
    var room_list_index = roomInfo.get_room_list_index_by_user_id(user_id);
    var max_counter = roomInfo.get_max_counter(room_list_index);
    var room_id = roomInfo.get_room_id_by_user_id(user_id);
    //console.log("ROOM ID TO CLIENT : " + room_list_index + " : USER ID : " + user_id + " : " + room_id);
    
    var sendData = JSON.parse('{"roomId":"'+room_list_index+'", "userId":'+user_id+'}');
    socket.broadcast.emit("DELETE_LEAVE_USER", sendData);


    if(max_counter == 5)
    {
        //console.log("DELETE PRIVATE USER");
        socket.broadcast.emit("DELETE_PRIVATE_USER", sendData);
    }
    
    if(room_id != -1)
    {
        var room_query = conndb.query("SELECT * FROM room_info WHERE id="+room_id);

        room_query
        .on('error' , function(err){
            console.log(err);
        })
        .on('result', function(room){
            var room_member_cnt = room.user_amount;
            room_member_cnt -= 1;
            if(room_member_cnt < 0)
            {
                room_member_cnt = 0;
            }
            //console.log("Current ::" + room_member_cnt + " Older : " + room.user_amount);
            conndb.query("UPDATE room_info SET user_amount="+room_member_cnt + " WHERE id="+room_id);
        });
    }
    var online_user_list = [];
    var online_user = conndb.query("SELECT * FROM user_info WHERE room_id != 0");

    online_user
    .on('error' , function(err){
        console.log(err);
    })
    .on('result', function(user){
        online_user_list.push(user);
    })
    .on('end', function(){
        if(online_user_list.length == 0)
        {
            conndb.query("UPDATE room_info SET user_amount=0");
        }
    });
}



exports.player_leave_game = function(data, socket){
    var user_id = data['user_id'];
    var room_id = data['room_id'];

    this.delete_user_from_room(user_id, socket);
}



exports.player_join_private_room = function(data, socket){
    var room_id = data["room_id"]; 
    var user_id = data["user_id"];
    var user_list = [];
    var index = roomInfo.get_roomlist_index(room_id);
    if(index == -1)
    {
        var failed_result = {
            result:'failed'
        }
        socket.emit("PRIVATE_ROOM_RESULT", failed_result);
    }
    //console.log("ROOM INDEX : " + roomInfo.get_room_id(index));
    var entry_coin_query = conndb.query("SELECT * FROM room_info WHERE id="+roomInfo.get_room_id(index));
    var entry_coin;
    var winner_coin;

    entry_coin_query
    .on("error", function(err){
        console.log(err);
    })
    .on("result", function(room){
        entry_coin = room.payoutcoin;
        winner_coin = room.winning_coin;
    })
    .on("end", function(){
        roomInfo.add_user(room_id, user_id);
        conndb.query("UPDATE user_info SET room_id = '"+room_id+"' WHERE id = "+user_id);
        var query = conndb.query("SELECT * FROM user_info WHERE room_id=" + room_id);
        

        query
        .on("error", function(err){
            console.log(err)
        })
        .on("result", function(user){
            var temp_data = {
                            id : user.id,
                            nickname : user.nickname,
                            avatar : user.avatar,      
                            coins : user.money,                                                
                            };            
            user_list.push(temp_data);
        })
        .on("end", function(){
            //var send_data = JSON.parse('{"roomId":"'+room_id+'","data":'+user_list+',"mainUser":'+first_user+'}');
            var roomId = "" + room_id;

            var send_data = {
                winningCoin:winner_coin,
                entryCoin:entry_coin,
                roomId:roomId,
                data:user_list,
                result:'success'
            } 
            //console.log("SEND DATA : ", send_data);
            socket.emit("PRIVATE_ROOM_RESULT", send_data);
        });
    });
    

}




exports.start_private_game = function(data, socket)
{
    var room_id = data["room_id"];

    var send_data = {
        roomId:room_id
    }

    socket.emit("START_GAME_RESULT", send_data);
}


exports.delete_private_room = function(data, socket){
    var room_id = data["room_id"];
    var user_id = data["user_id"];
    //console.log("DELETE PRIVATE ROOM : ", data);
    var send_data = {
        result:'delete',
        roomId:"" + room_id
    }
    this.delete_user_from_room(user_id, socket);
    socket.broadcast.emit("DELETE_PRIVATE_USER", send_data);
}


exports.withdraw_request = function(data, socket){
    var user_name = data["user_name"];
    var coin_amount = data["coins"];
    var user_id = data["user_id"];
    var phone= data["phone"];
    var paytmPhone = data["paytmPhone"]
    console.log(phone);
    console.log("paytmPhoneNum --" + paytmPhone);
    var date = new Date();
    console.log("WITHDRAW REQUEST ARRIVE FROM " + user_name);

   conndb.query("INSERT INTO notify_table (number,name,date,money,user_id,status,paytmPhone) VALUES ("+"'"+phone + "'" + ","+ "'"+ 
                                                        user_name + "'" +  "," +  "'" + 
                                                        date + "'" +  "," +  "'"+ 
                                                        coin_amount +  "'"+ "," + 
                                                        user_id + "," + 
                                                        0 + "," + 
                                                        paytmPhone + ")");

   conndb.query("UPDATE user_info SET money=money-"+ "'"+ data['coins'] + "'"+ " WHERE id="+user_id);
}

exports.update_user_profile = function(data, socket) {
    var user_name = data["user_name"];
    var password = data["password"];
    var phone_number = data["phone_number"];
    console.log(user_name + " 's phone number " + phone_number);
    var email = data["email"];
    var user_id = data["user_id"];

    var query_result = conndb.query("UPDATE user_info SET nickname='"+
                                        user_name+"', password='"+
                                        password+"', email='"+
                                        email+"', phone='" + 
                                        phone_number + "' WHERE id="+user_id);
}

exports.send_verifycode = function(data, socket){
    var verify_code = data["verficode"];
    var user_name = data["user_name"];
    var user_id = data["user_id"];

    conndb.query("UPDATE notify_table SET verify = '"+ verify_code +"' WHERE user_id = " + user_id);
}