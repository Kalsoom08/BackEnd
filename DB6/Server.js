const express = require('express');
const app = express();
const port = 3000;
const orderRoute = require('./Routes/orderRoute')

const Connect = require('./Connect/connect')
Connect()
app.use(express.json());

app.use('/api', orderRoute)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
