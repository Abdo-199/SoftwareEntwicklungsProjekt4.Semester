const express = require("express");
//const dotenv = require('dotenv');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

//const connectDB = require('../database/connection');

//dotenv.config({ path: 'config.env' });

app.use(cors());

const room_nr = "";

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


//mongodb connection
//connectDB();

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        console.log(`User want connection: ${data}`);
        //socket.emit("parse_room", data);
        socket.join(data);
        socket.emit("parse_room")
    });

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    });
});

server.listen(4000, () => {
    console.log("SERVER IS RUNNING");
});