// const express = require('express')
// const app = express()
// const path = require('path')
// const morgan = require('morgan');
// const cors = require('cors');
// const multer = require('multer');

//Built In Middleware
// app.use(express.json())

// app.post("/login",(req, res)=>{
//     const {name, password} = req.body;
//     console.log(req.body);
//     res.send({
//         data : req.body,
//         message : "Login Successfully"
//     })
// })

// app.use(express.urlencoded({extended: true}))
// app.post("/login", (req,res)=>{
//     const {name} = req.body;
//     console.log(req.body);
//     res.send("200 | Successfully ")
// })


// // Third Part

// // Morgan
// It logs details about each incoming HTTP request (like method, URL, status, and response time).
// app.use(morgan('dev'))
// app.get("/", (req, res)=>{
//     res.send("Morgan Loging");
// })

// //CORS
 
// // app.use(cors())

// //Multer
// app.use(cors());
// app.use(morgan('dev'));


// const fileStorage = multer.diskStorage({
//     destination : function(req, file, cb){
//         cb(null, 'uploads/')
//     },
//     filename: function(req, file, cb){
//         const ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })

// const storeItem = multer({storage: fileStorage})

// app.post('/upload',storeItem.single('file'),(req, res)=>{
//     console.log(req.file);
//     res.send('Uploaded')
// })


app.listen(5000, () => console.log('Server running on http://localhost:5000'));
