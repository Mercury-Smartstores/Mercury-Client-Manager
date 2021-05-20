var express = require('express')
var app = express()
var httpServer = require('http').createServer(app);
var io = require('socket.io')(httpServer);

var connections = [];

var fs = require('fs');

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}

httpServer.listen(process.env.PORT || 3000, () => console.log('Server is running...'));

io.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connecting...%s clients are connected', connections.length);
    
    socket.on('disconnect', data => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnecting...%s clients are connected', connections.length);
    });

    socket.on('add item', data => {
        console.log("Received \'send item\' message: ", data);
        socket.emit('add item', {name: 'Orange', price: '0.45', image: base64_encode('assets/orange.png')}); // Example
    });

    socket.on('remove item', data => {
        console.log("Received \'remove item\' message: ", data);
        socket.emit('remove item', {name: 'Orange', price: '0.45'}); // Example
    });

    socket.on('request explanation', data => {
        console.log("Received \'request explanation\' message: ", data);
        // TODO: send video
    });

    socket.on('exit store', data => {
        console.log("Received \'exit store\' message: ", data);
        socket.emit('exit store');
    });
});


