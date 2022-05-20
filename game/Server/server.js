const http = require('http');
const express = require('express');

// create app-obj from express funcioncall
const app = express();
//create server-obj
const server = http.createServer(app);
// import socket from socketIO
const socket = require('socket.io');
// io instance
const io = socket(server);

io.on('connection', socket =>{
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user has disconnected.');
    });
});


// let server listen on port 
server.listen(1337, () => console.log("server is running on port 1337"));