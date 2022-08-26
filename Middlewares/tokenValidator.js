require("dotenv").config();
const jwt=require("jsonwebtoken");

const AuthenticationError=require("../Error_Handlers/authenticationError");

const tokenChecker=(req,res,next)=>{
    try{
        jwt.verify(process.env.MONGO_URI);
        next();
    }
    catch(err){
        throw new AuthenticationError("The page you are trying to access is restricted");
    }
}

module.exports=tokenChecker;