
var roomlist = []
exports.set_room_info = function (userId, room_id, maxMember) {    
    var curtime = new Date();
    var roomdata = {
        user_id: [maxMember],
        room_id: room_id,
        maxMember: maxMember,
        empty: true,
        id: curtime.getTime(),
        currentMember: 1,
        ready_count: 0,
        bot_count: 0
    };

    roomlist.push(roomdata);
    roomlist[roomlist.length - 1].user_id.push(userId);
    //console.log("CREATE ROOMID : " + curtime.getTime() + " ROOM INDEX : " + roomlist.length + " USER ID : " + userId);
    return curtime.getTime();
}

exports.get_room_count = function () {
    return roomlist.length;
}

exports.get_ready_count = function (room_id) {
    return roomlist[room_id].ready_count;
}
exports.increase_ready_count = function (room_id) {
    roomlist[room_id].ready_count++;
}

exports.get_room_status = function (room_id) {
    if (roomlist[room_id].currentMember == roomlist[room_id].maxMember)
        return true;
    else
        return false;
}

exports.get_all_ready = function (room_id) {
    //console.log("USERLIST LENGTH : " + roomlist[room_id].user_id.length + " READY COUNT : " + roomlist[room_id].ready_count);
    if (roomlist[room_id].maxMember == roomlist[room_id].ready_count) {
        return true;
    }
    return false;
}

exports.get_emptyplace_count = function (room_id) {
    if(roomlist[room_id] != null)
    {
        return roomlist[room_id].maxMember - roomlist[room_id].currentMember;
    }
    return -1;



}

exports.get_userlist = function (room_id) {
    if(roomlist[room_id] != null)
    {
        return roomlist[room_id].user_id;
    }
    return null;
}

exports.get_empty_room = function (user_id, room_id, maxMember) {
    var ret_room_id = -1;
    for (i = 0; i < roomlist.length; i++) {
        if (roomlist[i].room_id == room_id && roomlist[i].empty) {
            if (roomlist[i].currentMember < maxMember) {
                ret_room_id = roomlist[i].id;
                roomlist[i].user_id.push(user_id);
                roomlist[i].currentMember++;
                //console.log("ROOM ID : " + ret_room_id + " ROOMLIST INDEX : " + i);
                break;
            }
        }
    }
    return ret_room_id;
}

exports.get_roomlist_index = function (id) {
    var index = -1;

    for (var i = 0; i < roomlist.length; i++) {
        if (roomlist[i].id == id) {
            index = i;
        }
    }
    return index;
}


exports.get_bot_count = function (id) {
    //console.log(" BOT Count : " + roomlist[id].bot_count);
    
    if(roomlist[id] != null)
    {
        return roomlist[id].bot_count;
    }

    return -1;
    
}


exports.set_bot_count = function (id, bot_ctn) {

    if(roomlist[id] != null)
    {
        roomlist[id].bot_count = bot_ctn;
    }

    
}

exports.get_room_id = function(id){
    if(roomlist[id] != null)
    {
        return roomlist[id].room_id;
    }

    return -1;
}


exports.get_room_id_by_user_id = function(user_id){
    var index = -1;
    for(var i = 0 ; i < roomlist.length ; i++){
        for(var j = 0 ; j < roomlist[i].user_id.length ; j++){
            if(roomlist[i].user_id[j] == user_id)
            {
                index = roomlist[i].room_id;
                roomlist[i].user_id.splice(j, 1);
            }
        }
    }

    return index;
}

exports.get_room_list_index_by_user_id = function(user_id){
    var index='';
    for(var i = 0 ; i < roomlist.length ; i++){
        for(var j = 0 ; j < roomlist[i].user_id.length ; j++){
            if(roomlist[i].user_id[j] == user_id)
            {
                index = roomlist[i].id;
            }
        }
    }

    return index;
}


exports.set_empty_false = function(room_id){
    for(var i = 0 ; i < roomlist.length ; i++)
    {
        if(roomlist[i].id == room_id)
        {
            roomlist[i].empty = false;
        }
    }
}


exports.add_user = function(room_id, user_id)
{
    for(var i = 0 ; i < roomlist.length ; i++)
    {
        if(roomlist[i].id == room_id)
        {
            roomlist[i].user_id.push(user_id);
        }
    }
}


exports.get_first_user = function(room_id){
    var first_user = -1;
    for(var i = 0  ; i < roomlist.length ;  i++)
    {
        if(roomlist[i].id = room_id)
        {
            first_user = roomlist[i].user_id[0];

            break;
        }
    }

    return first_user;


}


exports.get_max_counter = function(id)
{
    var ret_max = -1;

    for(var i = 0 ; i < roomlist.length ; i++)
    {
        if(roomlist[i].id == id)
        {
            ret_max = roomlist[i].maxMember;
        }
    }

    return ret_max;
}