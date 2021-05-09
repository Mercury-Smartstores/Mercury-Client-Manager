var express = require('express')
var app = express()
var httpServer = require('http').createServer(app);
var io = require('socket.io')(httpServer);

var connections = [];

httpServer.listen(process.env.PORT || 3000, () => console.log('Server is running...'));

io.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connecting...%s sockets are connected', connections.length);

    // Disconnect
    socket.on('disconnect', data => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnecting...%s sockets are connected', connections.length);
    });

    // Explanation has been requested
    socket.on('add item test', data => {
        console.log('Adding item to cart');
        socket.emit('new item', {
            name: 'Apple',
            price: 0.93
        });
    });

    // Explanation has been requested
    socket.on('explain', data => {
        console.log('Explanation requested'); // We will do the rest of the logic later
    });
});


