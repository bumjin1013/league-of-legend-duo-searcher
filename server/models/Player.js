const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    nickname: {
        type:String,
        maxlength: 30
    },
    password: {
        type: String,
        minglength: 5
    },
    role: {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
})

const Player = mongoose.model('Player', playerSchema);

module.exports = { Player }