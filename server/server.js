const express = require("express");
const dotenv = require('dotenv');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env'});

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});



//mongodb connection
connectDB();


io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});

server.listen(4000, () => {
    console.log("SERVER IS RUNNING");
});