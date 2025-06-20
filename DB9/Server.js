const express = require('express')
const app = express()
const postRoute = require('./Routes/postRoutes')
const userRoute = require('./Routes/userRoutes')
const connect = require('./Config/connect')
connect()
app.use(express.json())

app.use('/api', postRoute)
app.use('/api', userRoute)

app.listen(3000, ()=>{
    console.log('App is Running');
})