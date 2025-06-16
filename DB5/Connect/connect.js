const mongoose = require('mongoose');
require('dotenv').config()
const string = process.env.ConnectionString

const connect = async()=>{
try {
    await mongoose.connect(string)
    console.log('DB Connected');
} catch (error) {
    console.log(error.message);
}
}

module.exports = connect