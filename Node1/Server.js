// //Conditional Rendering 
const http = require('http')
const PORT = 3000
const fs = require('fs')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     res.end(`Server Created at ${PORT}`)
// })


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
// const server = http.createServer((req, res)=>{
// }) 
// 
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

const server = http.createServer((re, res)=>{
    res.end("200")
})

// fs.writeFile('file.js', 'Heelo', (err)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log("Writed!");
// }
// })

// fs.readFile("file.js", "utf-8",(err, data)=>{
// if(data){
//     console.log(data);
// }else{
//     console.log(err);
// }
// })

// fs.appendFile("file.js", "Appended", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Appended");
//     }
// })

// fs.unlink("file.js",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Deleted!");
//     }
// })

// if(fs.existsSync("script.js")){
//     console.log(true);
// }else{
//     console.log(false);
// }

// fs.mkdir('Main',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Creatd");
//     }
// })

// fs.mkdir('Main/Child', (err)=>{
//      if(err){
//         console.log(err);
//     }else{
//         console.log("Creatd");
//     }
//     })

// fs.rename('Main', 'Parent', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Renamed");
//     }
// })


server.listen(3000, console.log(`Server is Runing at http://localhost:${PORT}`))








