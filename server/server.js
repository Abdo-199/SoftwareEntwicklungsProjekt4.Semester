const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Legen den Pfad fest, um HTML über den von uns erstellten öffentlichen Ordner bereitzustellen
const publicPath = path.join(__dirname, '/../public');

// Legen Port fest
const port = process.env.PORT || 4000;

// Express Funk aufrufen 
let app = express();

// Dann geben wir die http-Methode an, um eine HTTP-Verbindung zuzulassen:
let server = http.createServer(app);

// Als letztes die SocketIO connection 
let io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', socket => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user has disconnected.');
    });
});

// Und dann zum Port connecten
server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});