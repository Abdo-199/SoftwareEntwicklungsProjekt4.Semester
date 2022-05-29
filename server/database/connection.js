const mongoose = require('mongoose');

const connectDB = async()=> {
    try{
        //mongodb Connection String
        const con = await mongoose.connect(process.env.MONOGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })

            console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.export = connectDB;