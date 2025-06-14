const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    details : {
        type : String,       
    },
    price: {
        type : Number, 
        required : true
    },
    ratings: {
        type: Number,
    },
    inStock: {
        type: Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model('Products', ProductSchema)