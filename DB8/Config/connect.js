require('dotenv').config()
const mongoose = require('mongoose')
const ConnectionString = process.env.ConnectionString


const connect = async()=>{
    try {
        await mongoose.connect(ConnectionString)
        console.log('DB Connected');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect