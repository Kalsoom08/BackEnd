require('dotenv').config(); 
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

const connect = async()=>{
  try {
    await mongoose.connect(connectionString, {})
    console.log('DB Connected');
  } catch (error) {
    console.log(error.message);
  }

}
module.exports = connect;
