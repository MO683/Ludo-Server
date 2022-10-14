var roomInfo = require('./roomInfo');

exports.joinPlayer = function(user_id, room_id, member){
    var delayTimeFindPlayer = 0;
    var addBot = true;
    var botNumber = 0;
    var olderDate = (new Date()).getTime();

    var my_room_id = roomInfo.get_empty_room(user_id, room_id, member);
    if(my_room_id == -1)
        my_room_id = roomInfo.set_room_info(user_id, room_id, member);

    //while(delayTimeFindPlayer <= 5)
    //{
        if(roomInfo.get_room_status(my_room_id))
        {
            addBot = false;
           // break;
        }
        
        var date = new Date();
        var nowTime = date.getTime();
       ////console.log(parseInt(nowTime) - parseInt(olderDate));
        if(parseInt(nowTime) - parseInt(olderDate) == 1000)
        {
            //console.log(nowTime + "now seconds" + delayTimeFindPlayer);
            olderDate = nowTime;
            delayTimeFindPlayer++;
        }
    //}

    if(addBot)
    {
        botNumber = roomInfo.get_emptyplace_count(my_room_id);
    }
    var userdata = roomInfo.get_userlist(my_room_id);
    var data = {
        roomListId: my_room_id,
        member:member,
        botNumber:botNumber,
        users: userdata
    };
    //console.log(data['roomListId']);

    return my_room_id;
}



exports.get_userid = function(id){
    var userdata = roomInfo.get_userlist(my_room_id);
    //console.log("Get User Count : " + userdata.length);

    return userdata;
}