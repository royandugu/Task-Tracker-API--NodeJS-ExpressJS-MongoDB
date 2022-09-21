require("dotenv").config();
const {StatusCodes}=require("http-status-codes");

const BadRequestError=require("../Error_Handlers/badRequestError");
const userModel=require("../Models/user");
const {postData}=require("./commonOperations");

const register=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password) throw new BadRequestError("Please provide both email and password");
    const newUser=await postData(userModel,{...req.body});
    const userToken=newUser.signToken();
    res.status(StatusCodes.CREATED).json({message:"User created", userInfo:newUser, userToken:userToken});
}
const login=(req,res)=>{
}

module.exports={login,register};