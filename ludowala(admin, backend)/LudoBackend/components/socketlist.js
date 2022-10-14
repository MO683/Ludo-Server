
var socketlist = []
exports.set_socket_info = function(socket_id, user_id){

    var socketdata = {
        user_id:user_id,
        socket_id:socket_id
    };

    console.log("ADD SOCKET LIST SOCKET ID : " + socket_id + " USER ID : " + user_id);
    socketlist.push(socketdata);

    return socketlist.length - 1;
}

exports.get_socket_count = function(){
    return socketlist.length;
}

exports.get_user_id_by_socket_id = function(socket_id){
    var user_id = -1;

    for(var i = 0 ; i < socketlist.length ; i++)
    {
        if(socketlist[i].socket_id == socket_id)
        {
            user_id = socketlist[i].user_id;
        }
    }
    return user_id;
}