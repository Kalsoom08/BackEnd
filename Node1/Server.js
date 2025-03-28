// //Conditional Rendering 
const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.end("Home")
//     }
//     else if(req.url == '/about'){
//         res.end("About")
//     }else{
//         res.end("Not Found")
//     }
// })
//server.listen(3000, console.log("Server is Runing at http://localhost:3000"))

////FS Modules
const server = http.createServer((req, res)=>{
}) 
const fs = require('fs')
// const { error } = require('console')
//Create

// fs.writeFileSync('fsFile.js', "Helo Helo")
// fs.writeFile('fsFile.js', "Helo", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Created");
// })

//read
// const read = fs.readFileSync('fsFile.js','utf8')
// console.log(read);

// const read = fs.readFile('fsFile.js','utf8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })


//apend
// fs.appendFileSync('fsFile.js', 'Appending Data')
// fs.appendFile('fsFile.js', 'Appending As', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("appending" );
// })

//Deleted
// fs.unlink('fsFile.js', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Deleted");
// })
server.listen(3000, console.log("Server is Runing at http://localhost:3000"))








