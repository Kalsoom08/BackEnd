const express = require('express');
const connect = require('./Config/connect.js');
const userRoutes = require('./Controller/controller.js');

const app = express()
connect();

app.use(express.json());
app.use('/user', userRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
