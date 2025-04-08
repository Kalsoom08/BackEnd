require('dotenv').config()
const connect = require('./connect.js')
const express = require('express')
const app = express()
const UserRoute = require('./Controller/User.js')
connect()

app.use(express.json())
app.use('/', UserRoute)

app.listen('3000', ()=>{
    console.log("http://localhost:3000");
})



