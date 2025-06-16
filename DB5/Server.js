const express = require('express');
const app = express();
const port = 3000;
const studentRoute = require('./Routes/studentRoute')
const Connect = require('./Connect/connect')
Connect()
app.use(express.json());


app.use('/api', studentRoute)

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
