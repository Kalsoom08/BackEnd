const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req,res,next)=>{
const authHeader = req.header('Authorization')
if(!authHeader) return res.json('Token Not Provided')

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded;
    next()

}

module.exports = authMiddleware;
