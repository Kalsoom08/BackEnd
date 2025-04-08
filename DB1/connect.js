const mongoose = require('mongoose')
const connectionString = process.env.ConnectionString

const connect = async ()=>{
try {
    await mongoose.connect(connectionString, {})
    console.log("Successully Connected", );
} catch (error) {
 console.log("Unable to Connect");
}
}

module.exports = connect