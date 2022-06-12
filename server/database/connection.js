
//DB Connection Test
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URI}`);
const db = mongoose.connection;

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});


//GET DB Documents
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(`${process.env.MONGO_URI}`, function(err, client) {
  if (err) {
    throw err;
  }
  var db = client.db('gamedb')
  db.collection('Player').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});


