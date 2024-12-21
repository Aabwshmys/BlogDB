const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authToken = req.headers.authorization;
  
  if (authToken) {
    const token = authToken.split(" ")[1];
    try {
      const decodedPayload = jwt.verify(token, "SECRET");
      req.user = decodedPayload;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
}
function verifyTokenAndAdmin (req,res,next){
  verifyToken(req,res,()=>{
    if(req.user.isAdmin){
      next();
    }else{
      return res.status(401).json({ message: "No allowed ,only admin" });
    }
  });
}
function verifyTokenAndUserId (req,res,next){
  verifyToken(req,res,()=>{
    if(req.user.id === req.params.id){
      next();
    }else{
      return res.status(401).json({ message: "No allowed " });
    }
  });
}
module.exports = {
  verifyTokenAndAdmin,
  verifyTokenAndUserId
};
