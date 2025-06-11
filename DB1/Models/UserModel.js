const mongoose = require('mongoose')

const userShcema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    password: {
        type : String,
        required: true
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('User', userShcema)