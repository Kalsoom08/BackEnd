const mongoose  = require('mongoose')
const connectionString = process.env.ConnectionString

const connect = async ()=>{
    try {
        await mongoose.connect(connectionString, {})
        console.log('Connection Established Successfully');
    } catch (error) {
        console.log(('Not Connected'));
    }
}

module.exports = connect