
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    rollNumber:{
        type: Number,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    fees: {
        type: Number,
        required: true
    } 
}, {
    timestamps : true
})

module.exports = mongoose.model('Students', studentSchema)