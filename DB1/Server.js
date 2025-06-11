require('dotenv').config()
const connect = require('./Connect/connect.js')
const express = require('express')
const app = express()
const userRoutes = require('./Routes/UserRoute.js')
connect()

app.use(express.json())

app.use('/user', userRoutes)


app.listen('3000', ()=>{
    console.log("http://localhost:3000");
})



