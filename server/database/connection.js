
//const connectDB = async() => {
 //   try {
//        //mongodb Connection String
//            useNewUrlParser: true,
//            useUnifiedTopology: true,
 //           useFindAndModify: false,
 //           useCreateIndex: true
 //       })
//
 //       console.log(`MongoDB connected : ${con.connection.host}`);
 //   } catch (err) {
 //       console.log(err);
 //       process.exit(1);
//    }
//}

const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URI}`);
const db = mongoose.connection;

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});



//module.export = connectDB;