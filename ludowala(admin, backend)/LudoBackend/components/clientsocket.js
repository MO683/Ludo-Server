var mysqldb = require('mysql');
var config = require('./db_info').local;
var usermanage = require('./usermanage');
var roommanage = require('./roommanager');
var gamemanage = require('./gamemanager');
var conndb = null;

exports.init = function(){
    conndb =  mysqldb.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
    });

    this.test_open(conndb);
    usermanage.init(conndb);
    roommanage.init(conndb);
    gamemanage.init(conndb);
}

exports.test_open = function(con){
    con.connect(function (err) {
        if (err) {
        console.error('mysql connection error :' + err);
        } else {
        console.info('mysql is connected successfully.');
        }
    });
}


exports.initsocket = function(socket, io){
    socket.on('disconnect', function(){
        //console.log('user disconnected.' + socket.id);
        gamemanage.delete_user_from_room(usermanage.get_and_delete_room(socket.id), socket)
    });

    socket.on('USER_REGISTER', function(data){
        console.log("---- USER_REGISTER ----" , data);
        usermanage.register(data, socket);        
    });

    socket.on('CHECK_PHONE', function(data){
        //console.log(data);
        usermanage.check_phone(data, socket);        
    });

    socket.on('REQUEST_API', function(data){
        console.log("data : " , data);
        usermanage.request_api(data, socket);        
    });
    

    socket.on('USER_REFERCHECK', function(data){
        //console.log(data);
        usermanage.refer_check(data,socket);        
    });

    socket.on('GET_REFERCOINS', function(){
        //console.log(data);
        usermanage.get_refercoins(socket);        
    });

    socket.on('USER_LOGIN', function(data){
        console.log("---- USER_LOGIN ----" , data);
        usermanage.login(data, socket);
    });

    socket.on('RESET_PASSWORD', function(data){
        //console.log(data);
        usermanage.reset_password(data, socket);
    });


    socket.on('GET_ROOMLIST', function(data){
        //console.log("Get Room Data");
        roommanage.get_room(data, socket);
    });

    socket.on('ENTER_ROOM', function(data){
        //console.log("Log In Room By User Id");
        gamemanage.login_room(data, socket);
    });

    socket.on('GET_OPPONENT', function(data){
        //console.log("Get Opponent players using roomId");
        gamemanage.get_opponent(data, socket);
    });

    socket.on('USER_INFO_UPDATE', function(data){
        usermanage.update_data(data, socket);
    });

    socket.on('GAME_START', function(data){
        //console.log("Game start");
        gamemanage.start_game(data, io.sockets);
    });

    socket.on("ROLL_DICE_EVENT", function(data){
        //console.log("ROLL DICE EVENT ARRIVE");
        gamemanage.roll_dice(data, socket);
    });

    socket.on("MAKE_MOVE_EVENT", function(data){
        //console.log("MAKE MOVE EVENT ARRIVE");
        gamemanage.make_move(data, socket);
    });

    socket.on("REMOVE_PAWN_EVENT", function(data){
        //console.log("REMOVE PAWN EVENT ARRIVE");
        gamemanage.remove_pawn(data, socket);
    });

    socket.on("FINISH_TURN_EVENT", function(data){
        //console.log("FINISH TURN EVENT ARRIVE");
        gamemanage.finish_turn(data, socket);
    });

    socket.on("CHAT_SEND_EVENT", function(data){
        //console.log("CHAT EVENT ARRIVE");
        gamemanage.chat_send(data, socket);
    });


    socket.on("CHAT_EMOJI_SEND_EVENT", function(data){
        //console.log("EMOJI SEND EVENT ARRIVE");
        gamemanage.chat_emoji_send(data, socket);
    });


    socket.on("FINISHED_GAME_EVENT", function(data){
        //console.log("FINISHED GAME EVENT ARRIVE");
        gamemanage.finished_game(data, socket);
    });


    socket.on("MINUS_COIN", function(data){
        //console.log("MINUS COIN EVENT");
        gamemanage.minus_coin(data, socket);
    });

    socket.on("UPDATE_USER_INFO", function(data){
        //console.log("UPDATE USER INFO");
        gamemanage.update_user_info(data);
    });

    socket.on("I_LEAVE_GAME", function(data){
        //console.log("PLAYRE LEAVE GAME");
        gamemanage.player_leave_game(data, socket);
    });

    socket.on("FACEBOOK_LOG_IN", function(data){
        console.log("---- FACEBOOK_LOG_IN ----" , data);
        usermanage.facebook_login(data, socket);
    });

    
    socket.on("EMAIL_LOG_IN", function(data){
        console.log("---- AUTO_LOGIN ----" , data);
        usermanage.email_login(data, socket);
    });


    socket.on("JOIN_PRIVATE_ROOM", function(data){
        //console.log("PLAYER SEND TO PIRVATE ROOM");
        gamemanage.player_join_private_room(data, io.sockets);
    });


    socket.on("START_PRIVATE_GAME", function(data){
        gamemanage.start_private_game(data, io.sockets);
    });


    socket.on("DELETE_PRIVATE_ROOM", function(data){
        gamemanage.delete_private_room(data, socket);
    });


    socket.on("WITHDRAW_REQUEST", function(data){
        gamemanage.withdraw_request(data, socket);
    });

    socket.on("UPDATE_USER_PROFILE", function(data){
        gamemanage.update_user_profile(data, socket);
    });

    socket.on("VERIFY_CODE", function(data){
        gamemanage.send_verifycode(data, socket);
    });

}