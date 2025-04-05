const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req,res,next)=>{
    const authHeader = req.header("Authorization")
    if(!authHeader) return resizeBy.json({Message: "No Token Provided"})
    
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        resizeBy.json({Message: "Invalid Token"})
    }
}

module.exports = authMiddleware;
