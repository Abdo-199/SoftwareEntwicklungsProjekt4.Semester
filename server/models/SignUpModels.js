const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        match: /.+\@.+\..+/,
        unique: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    score: {
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('gamedb', signUpTemplate)