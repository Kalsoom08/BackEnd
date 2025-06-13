const Connect = require('./Connect')
const express = require('express')
const app = express()
require('dotenv').config()
Connect()
app.use(express.json())
const userRoute = require('./Routes/UserRoute')

app.use('/api', userRoute)
app.listen(3000, ()=>{
    'App is Running on http://localhost:5000'
})


