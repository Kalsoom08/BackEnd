// const http = require('http');
const express = require('express')
const app = express()


// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!');
// });

//Custom Modules
// const add = (a,b)=>{
//     return a + b
// }

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

// module.exports = {add}

//Third party Modules
// app.get('/', (req,res)=>{
//     res.send("Helo First Practice")
// })

app.listen(3000, ()=>{console.log("Server is Running at http://localhost:3000");})