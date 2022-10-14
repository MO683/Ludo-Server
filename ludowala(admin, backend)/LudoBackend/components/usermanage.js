var socketlist = require('./socketlist');


var conndb = null;

exports.init = function(db){
    conndb = db;
}

exports.register = function(data, socket){
    var sqlquery = "SELECT * FROM user_info WHERE phone='"+ data['phone'] + "'";
    var res = conndb.query(sqlquery);
    userlist = [];

    res
    .on('error', function(err) {
        console.log(err);
    })
    .on('result', function(user) {
        userlist.push(user);
    })
    .on('end', function() {
        if(userlist.length != 0)
        {
             console.log("CheckPoint---- 1");
            var msg = {
                states : 1,
            };
            socket.emit('REGISTER_RESULT', msg);
            return;
        }
        else
        {
            var query = "INSERT INTO user_info (nickname,password,phone,money,email,blockinfo,avatar) VALUES ('"+
                    data['nickname'] +"','" + 
                    data['password']+ "',"+ 
                    data['phone'] + "," + 
                    data['money']+ ",'"+
                    data['email']+"',1,'assets/img/"+
                    data['avatar']+".png')";
                    
            conndb.query(query, function (err, result) {
                if(err){
                    console.log(err);
                }
                else{
                    query = "SELECT * FROM user_info WHERE phone='"+data['phone']+"' AND nickname='"+data['nickname']+"'";
                    var res1 = conndb.query(query);

                    res1
                    .on('error', function(err) {
                        console.log(err);
                    })
                    .on('result', function(user) {
                        console.log("SOCKET ID : " + socket.id + "  : USERID : " + user.id);
                        socketlist.set_socket_info(socket.id, user.id);

                        var user_info = {
                            states : 0,
                            nickname : user.nickname,
                            coins : user.money,
                            avatar : user.avatar,
                            blockinfo : user.blockinfo,
                            id : user.id,
                        };
                        

                        console.log("CheckPoint---- 2");
                        socket.emit('REGISTER_RESULT', user_info);
                    })
                }
            })
        }
    });    
}

exports.check_phone = function(data, socket)
{      
    var query = "SELECT * FROM user_info WHERE phone='"+ data['phone'] + "'";
    var res = conndb.query(query);
    userlist = [];
    console.log("CHeckPhone---" +data['phone']);

    res
        .on('error', function(err) {
            console.log(err);
        })
        .on('result', function(user) {
            userlist.push(user);
        })
        .on('end', function() {
            console.log("userlist --" + userlist.length);
            if(userlist.length != 0)
            {
                var msg = {
                    states : 1,
                };
                socket.emit('CHECKPHONE_RESULT', msg);
                return;
            }
            else
            {
                var msg1 = {
                    states : 0,
                };                 
                socket.emit('CHECKPHONE_RESULT', msg1);
                return;
            }
        });
}   

var request=require('request');
var options ={

};
exports.request_api = function(data, socket){
    request.get(data['api_url'],options,function(err,res,body){
      if(err) {
        console.log("Failed");
      }
      if(res.statusCode === 200 ) {
        console.log("Successully Sent..");
      }
    });
}


exports.refer_check = function(data, socket){
   
    var query = "SELECT * FROM user_info";
    
    var res = conndb.query(query);
    
    var userlist = [];
    var temp = "";

    // console.log("count -----------------");
    res
        .on('error', function(err) {
            console.log(err);
            var msg0 = {
                states:0,                           
            };
            socket.emit('REFER_RESULT', msg0);
        })

        .on('result', function(user) {  
            userlist.push(user);           
        })

        .on('end', function() {

            // console.log("PhoneMatchUsers = " + userlist.length);    
            
            if(userlist.length == 0)
            {
                var msg3 = {
                    states:3,                           
                };
                //console.log(msg2['states']);
                socket.emit('REFER_RESULT', msg3);
            }
            else
            {
                
                for(var i = 0; i < userlist.length; i++)
                {                    
                    if(userlist[i].phone == data['referCode'])
                    {  
                        console.log("refercode matched --- "+data['referCode']);
                        if(userlist[i].phone != "" && data['referCode'] != "")
                        {                          
                            var res1 = conndb.query("SELECT * FROM admin_info"); 
                            var oppPhone =  userlist[i].phone;
                            var myPhone = data['phone'];
   
                            res1
                            .on('error', function(err) {
                                console.log(err);                                
                            })
                            .on('result', function(user1) {   
                                
                                temp = user1.freeCoins;

                                // console.log("temp ==" + temp);
                                // console.log("opponentPhone ==" + oppPhone);
                                // console.log("myPhone ==" + myPhone);
                                
                                conndb.query("UPDATE user_info set money=money+'"+ temp +"' WHERE phone =" + oppPhone); 
                                conndb.query("UPDATE user_info set money=money+'"+ temp +"' WHERE phone =" + myPhone);
                                
                                var msg1 = {
                                    states:1,                                                                
                                };
                                socket.emit('REFER_RESULT', msg1);      
                            })           
                        }                       
                    }
                    else{
                        var msg2 ={
                            states:2,                           
                        };                   
                        socket.emit('REFER_RESULT', msg2);
                    }
                }
            }            
        });
}

exports.login = function(data, socket){
   
    var query = "SELECT * FROM user_info WHERE phone='"+ data['phone'] + "'";
    
    var res = conndb.query(query);
    
    var userlist = [];

    res
        .on('error', function(err) {
            console.log(err);
            var msg0 = JSON.parse('{ "states":0}');
            socket.emit('LOGIN_RESULT', msg0);
        })


        .on('result', function(user) {            
            userlist.push(user);           
        })

        .on('end', function() {

            // console.log("PhoneMatchUsers = " + userlist.length);    
            
            if(userlist.length == 0)
            {
                var msg3 = JSON.parse('{ "states":3}');
                //console.log(msg2['states']);
                socket.emit('LOGIN_RESULT', msg3);
            }
            else
            {
                for(var i = 0; i < userlist.length; i++)
                {
                    if(userlist[i].password == data['password'])
                    {
                        console.log("SOCKET ID : " + socket.id + "  : USERID : " + userlist[i].id);
                        socketlist.set_socket_info(socket.id, userlist[i].id);

                        var msg1 = {
                            states:1,
                            nickname:userlist[i].nickname,
                            coins:userlist[i].money,
                            avatar:userlist[i].avatar,
                            blockinfo:userlist[i].blockinfo,
                            id:userlist[i].id,
                            phone:"" + userlist[i].phone,
                            email:userlist[i].email,
                            password:"" + userlist[i].password
                        };
                        socket.emit('LOGIN_RESULT', msg1);
                    }
                    else{
                        var msg2 = JSON.parse('{ "states":2}');
                        //console.log(msg2['states']);
                        socket.emit('LOGIN_RESULT', msg2);
                    }
                }
            }            
        });
}


exports.reset_password  = function(data, socket){
    var sqlquery = "UPDATE user_info SET password = '"+ data['password'] +"' WHERE phone = " + data['phone'];
    conndb.query(sqlquery);   
}


exports.get_refercoins  = function(socket){
    var sqlquery = "SELECT * FROM admin_info";
    var res = conndb.query(sqlquery);

    res
    .on('error', function(err){
        console.log(err);
    })
    .on('result', function(user){
        
        var referdata = {
            freecoins : user.freeCoins,
        };
        socket.emit("REFERCOINS_CHECK", referdata);
    })
}

exports.update_data  = function(data, socket){
    var query = "SELECT * FROM user_info WHERE id="+data['id'];
        
    var res = conndb.query(query);
    
    res
    .on('error', function(err){
        console.log(err);
    })
    .on('result', function(user){
        
        var updateData = {
            id : user.id,
            nickname : user.nickname,
            blockinfo : user.blockinfo,
            coins : user.money,
            roomId : user.room_id,
        };
        
        socket.emit("GET_USER_INFO", updateData);
    })
}


exports.get_and_delete_room = function(socket_id){
    var user_id = socketlist.get_user_id_by_socket_id(socket_id);
    
    if(user_id != -1)
    {
        var sqlquery = "UPDATE user_info SET room_id = '' WHERE id = " + user_id;
        conndb.query(sqlquery);
    }
    //console.log("RETURN USER ID : " + user_id);
    
    return user_id;
}

exports.facebook_login = function(data, socket){
    var nickname = data['nickname'];
    var avatar_url = data['avatar'];
    var email = data['email'];
    var phone = data['phone'];
    var user = [];

    var res = conndb.query("SELECT * FROM user_info WHERE fb_id='"+data['fb_id']+"'");

    res
    .on("error", function(err){
        console.log(err);
    })
    .on("result",function(user_result){
        user.push(user_result);
    })
    .on("end", function(){
        //console.log("USER LIST LENGTH : " + user.length);
        if(user.length == 0)
        {
            var query = "INSERT INTO user_info (nickname,money,email,blockinfo,avatar,phone,fb_id) VALUES ('"+
                        nickname+"',0,'"+
                        email+"',1,'"+
                        avatar_url+"','"+
                        phone+"','"+
                        data['fb_id']+"')";
            conndb.query(query, function (err, result){
                if(err){
                    console.log(err);
                }
                else{
                    query = "SELECT * FROM user_info WHERE email='"+ email +"'";
                    var res2 = conndb.query(query);

                    res2
                    .on('error', function(err) {
                        console.log(err);
                    })
                    .on('result', function(return_user) {
                        var user_info = {
                            nickname : return_user.nickname,
                            coins : return_user.money,
                            avatar : return_user.avatar,
                            blockinfo : return_user.blockinfo,
                            id : return_user.id,
                            email : return_user.email,     
                            phone : return_user.phone,   
                            password : return_user.password,                                             
                        };
                        //console.log("SEND TO CLIENT : " + return_user.nickname);
                        
                        socketlist.set_socket_info(socket.id, return_user.id);
                        socket.emit("FACEBOOK_REGISTER_RESULT", user_info);
                    });
            
                }
            });
        }
        else{
            //console.log("FACEBOOK NICKNAME : " + user[0].nickname);
            if(user[0].avatar != avatar_url)
            {
                conndb.query("UPDATE user_info SET avatar='"+avatar_url+"' WHERE id="+user[0].id);
            }
            var user_info1 = {
                            nickname : user[0].nickname,
                            coins : user[0].money,
                            avatar : user[0].avatar,
                            blockinfo : user[0].blockinfo,
                            id : user[0].id,
                            email : user[0].email,
                            phone : user[0].phone,   
                            password : user[0].password,                                                     
                        };
            socket.emit("FACEBOOK_REGISTER_RESULT", user_info1);
        }
    });
    
}


exports.email_login = function(data, socket){
    
    console.log("EMAIL LOG IN ARRIVE" + data);
    var id = data['id'];
    socketlist.set_socket_info(socket.id, id);
    var user = [];
    var res = conndb.query("SELECT * FROM user_info WHERE id="+id);
    res
    .on("error", function(err){
        console.log(err);
    })
    .on("result", function(user_result){
        user.push(user_result);
    })
    .on("end", function(){
        if(user.length == 0)
        {
            var send_data_1 = JSON.parse('{"message":"YOU ARE DELETED BY ADMIN","result":0}');
            socket.emit("EMAIL_LOGIN_RESULT", send_data_1);
        }
        else if(user[0].blockinfo == 0)
        {
            var send_data_2 = JSON.parse('{"message":"YOU ARE BLOCKED BY ADMIN","result":0}');
            socket.emit("EMAIL_LOGIN_RESULT", send_data_2);
        }
        else{
            var send_data_3 = JSON.parse('{"nickname":"'+
                                            user[0].nickname+'", "coins":'+
                                            user[0].money+', "avatar":"'+
                                            user[0].avatar+'", "blockinfo":'+
                                            user[0].blockinfo+', "id":'+
                                            user[0].id+',"result":1}');
            socket.emit("EMAIL_LOGIN_RESULT", send_data_3);
        }
    });
}