const express = require("express");
require("dotenv").config({ path: 'config.env' })
const jwt = require("jsonwebtoken");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");


const connectDB = require('./database/connection');
const routesUrls = require('./routes/routes');
const SignUpModels = require("./models/SignUpModels");
const JWT_SECRET = "supersecret";

app.use(express.json())
app.use(cors());
app.use('/player/access', routesUrls)


const room_nr = "";

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


app.post("/login", async function (req, res) {
  
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(`${process.env.MONGO_URI}`, function(err, client) {
  if (err) {
    throw err;
  }
  var db = client.db('test')
  const { email, password } = req.body;
  
  console.log(email, password);

  if (!email || !password) {
    res.status(404).send("Missing Password");
  }
  db.collection('gamedbs').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    result.forEach(user => {
    if(user.email == email && user.password == password)
    {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        console.log(token);
        res.status(200).send({ token });

        console.log("Eingeloggt")
    } 
    });
  });
});

});

   
  

  




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
        console.log(data.room);
        socket.to(data.room).emit("receive_message", data);
        console.log("Nahricht wurde abgeschickt");
        console.log("NAchricht war: "+ data.message)
    });
});

server.listen(4000, () => {
    console.log("SERVER IS RUNNING");
});