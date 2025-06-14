const productRoute = require('./Routes/productsRoute');
const express = require('express');
const Connect = require('./Config/Connect');
require('dotenv').config();
const app = express()
const PORT = 5000;
Connect()

app.use(express.json())

app.use('/api', productRoute);

app.listen(PORT, ()=>{console.log(`App is Running on http://localhost:${PORT}`)})