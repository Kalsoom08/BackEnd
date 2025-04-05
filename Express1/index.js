const express = require('express')
const app = express()

// app.get("/", (req, res)=>{
//     res.send("First Express Practice")
// })

//Middlewares

//Application Middleware
// Application-level middleware in Express.js is middleware that is directly bound to an app instance using app.use() or specific HTTP methods like app.get() and app.post(). It is used to process requests before they reach the route handler and can modify the req and res objects.



// app.use((req, res, next) => { 
//     console.log("Request received at:", new Date().toISOString()); 
//     next(); 
//     }); 

//     app.get("/", (req, res)=>{
//     res.send("First Express Practice")
// })


//Authentication
function authenticateUser(req, res, next) {
    const token = 'secretKey';

    if (token === 'secretkey') {
        next(); 
    } else {
        res.status(403).json({ error: 'Unauthorized access' }); 
    }
}

const PORT = 3000;
app.get('/dashboard', authenticateUser, (req, res) => {
    res.send('Welcome to your dashboard!');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/dashboard`));
