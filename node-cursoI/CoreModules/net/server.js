var net = require('net');


var connections = [];

var brodcast = function(message, origin){
    connections.forEach(function(connection){
        if (connection === origin) return;
        connection.write(message);
    });
};
 
net.createServer(function (connection){
    connections.push(connection);
    connection.write('Hello, I am the server!');
    connection.on('data', function(message){
        var command = message.toString();
        if(command.indexOf('/nickname') === 0) {
            var nickname = command.replace('/nickname', '');
            brodcast(connection.nickname + ' is now ' + nickname);
            connection.nickname = nickname;
            return;
        }
        brodcast(connection.nickname + '>' + message, connection);
    }); 
}).listen(3000);

