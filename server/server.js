const express = require("express");
require("dotenv").config({ path: 'config.env' })

const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const connectDB = require('./database/connection');

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
        socket.join(data);
        console.log(socket.rooms); // the Set contains at least the socket ID
        socket.emit("roomNo", data);
    });
    socket.on("disconnect", (socket) => {
        console.log(`User disconnected`);
    })

    socket.on("send_message", (data) => {
        console.log(socket.rooms);
        socket.in(data.room).emit("receive_message", data);
        console.log(data.room);
    });
});

server.listen(4000, () => {
    console.log("SERVER IS RUNNING");
});