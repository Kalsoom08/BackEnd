const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config();

const PORT = 3000;

//Router Middlewware
// router.use((req, res, next)=>{
//     console.log("Middleware Executed");
//     next()
// })

// router.get("/" ,(req,res)=>{
//     res.send("Helo Helo")
// })
// app.use("/", router)

//Error Handeling 
// app.get('/', (req,res,next)=>{
//     try {
//         throw new Error("Error arises")
//     } catch (error) {
//         next(error)
//     }
// })

// app.use((err, req, res,next )=>{
//     console.error(err.message);
//     res.status(500).json({ error: err.message}); 

// })
app.listen(PORT, ()=>{console.log(`Port is running at http://localhost:3000` );})
