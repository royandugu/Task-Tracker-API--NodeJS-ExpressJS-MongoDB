require("dotenv").config();
const {StatusCodes}=require("http-status-codes");

const BadRequestError=require("../Error_Handlers/badRequestError");
const AuthenticationError=require("../Error_Handlers/authenticationError");
const userModel=require("../Models/user");
const {getIndvData,postData}=require("./commonOperations");

const register=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password) throw new BadRequestError("Please provide both email and password");
    const newUser=await postData(userModel,{...req.body});
    const userToken=newUser.signToken();
    res.status(StatusCodes.CREATED).json({message:"User created", userInfo:newUser, userToken:userToken});
}
const login=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password) throw new BadRequestError("Please provide both email and password");
    const reqUser=await getIndvData(userModel,{email: email});
    if(!reqUser)  throw new AuthenticationError("The user you are trying to login as does not exist");
    const validated=await reqUser.validatePassword(password);
    if(validated) {
        const userToken=reqUser.signToken();
        return res.status(StatusCodes.CREATED).json({message: "You are succesfully logged in", userToken:userToken});
    }
    else throw new AuthenticationError("Your password doesnot match");
}

module.exports={login,register};