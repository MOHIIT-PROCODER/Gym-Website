const jwt = require("jsonwebtoken");

const adminAuth = (req,res,next)=>{

 try{

  const token = req.headers.authorization;

  if(!token){
   return res.status(401).json({message:"Unauthorized"});
  }

  const decoded = jwt.verify(
   token.split(" ")[1],
   process.env.JWT_SECRET
  );

  req.admin = decoded;

  next();

 }catch(err){

  res.status(401).json({
   message:"Invalid Token"
  });

 }

};

module.exports = adminAuth;