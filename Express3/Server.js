const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config();

const PORT = 3000;

////Router Middlewware
// router.use((req, res, next)=>{
//     console.log(new Date());
//     next()
// })

// router.get('/user',(req, res)=>{
//     res.json({
//         message : 'Router Middleware Executed'
//     })
// })

// //Will run in server when folder str is created
// app.use('/userID', router)


//Error Handeling 
// app.get('/error', (req, res)=>{
//     res.send("Error API executed ")
//     throw new Error('Errror!')
// })

// app.use((err, req, res, next)=>{
//     console.log(err.message);
// })

// app.listen(PORT, ()=>{console.log(`Port is running at http://localhost:${PORT}/` );})
