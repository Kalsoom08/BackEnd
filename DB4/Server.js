import express from 'express';
import { connect } from './Connect/connect.js';
import dataRoute from './Routes/dataRoute.js';

const app = express();
app.use(express.json());


connect();

app.use('/api', dataRoute);

app.listen(3000, () => {
    console.log("App is Running on Port: 3000");
});
