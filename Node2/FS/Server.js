const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
})
// fs.writeFileSync('one.txt', "Helo")

// Check To Exist
// if(fs.existsSync("onne.txt")){
//     console.log(true);
// }else{
//     console.log(false);
// }

//Rename
// fs.renameSync("one.txt", "one.text")
// fs.rename('two.text', "one.text" , (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

//Mkdir
// fs.mkdirSync("One")
// fs.mkdirSync("Two/one", (err)=>{
//     console.log(err);
// })
// fs.readdirSync("One")


server.listen(5000, ()=>{console.log("Server is Running at http://localhost:5000");})

