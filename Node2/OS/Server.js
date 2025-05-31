const http = require('http')
const os = require('os')
const PORT = 3000 

http.createServer((req, res)=>{
}).listen(PORT, ()=>{
   console.log("Runing on Port http://localhost:"+PORT);
})

//OS Modules
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.version());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.tmpdir());