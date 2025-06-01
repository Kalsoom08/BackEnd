const http = require('http');
const express = require('express')
const app = express()
const port = 3000


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
}).listen(port, ()=>{console.log("Server is Running at http://localhost:3000")})

//Custom Modules
exports.add = (a, b)=>{
    return a + b;
}

//Third party Modules
// app.get('/', (req,res)=>{
//     res.send("Helo First Practice")
// })

// app.listen(3000, ()=>{console.log("Server is Running at http://localhost:3000");})