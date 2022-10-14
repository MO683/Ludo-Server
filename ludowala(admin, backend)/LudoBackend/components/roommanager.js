

var conndb = null;

exports.init = function(db){
    conndb = db;
}





exports.get_room = function(data, socket){
    var query = conndb.query('SELECT * FROM room_info'),
        rooms = []; 
    
        query
        .on('error', function(err) {
            console.log(err);
        })
        .on('result', function(room) {
            var roominfo = { 
                             id : room.id,
                             coin : room.payoutcoin,
                             member : room.user_amount,
                             matchtype : room.matchtype,
                             roomname : room.room_name,
                             winning : room.winning_coin,
                             end : 0,
                            };

            socket.emit('ROOMLIST_RESULT', roominfo);
        })
        .on('end', function() {
            var info = JSON.parse('{"end":1}');
            socket.emit("ROOMLIST_RESULT", info);
        });
}





