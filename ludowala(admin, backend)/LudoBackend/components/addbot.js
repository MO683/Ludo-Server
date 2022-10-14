
var bot = []
exports.set_bot_info = function(room_id){

    var botdata = {
        id:"_BOT" + bot.length,
        avatar:Math.floor(Math.random() * Math.floor(20)),
        nickname:'Guest' + Math.floor(Math.random() * (999999 - 100000) + 100000),
        room_id:room_id
    };

    bot.push(botdata);

    return bot.length - 1;
}

exports.get_bot_id = function(index){
    return bot[index].id;
}

exports.get_bot_avatar = function(index){
    return bot[index].avatar;
}

exports.get_bot_nickname = function(index){
    return bot[index].nickname;
}

exports.get_bot_room_id = function(index){
    return bot[index].room_id;
}

