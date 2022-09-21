const {StatusCodes}=require("http-status-codes");
const CustomAPIError=require("./customAPIError");

const errorHandler=(err,req,res,next)=>{
    let errorInfo={
        statusCode:err.statusCode || 500,
        msg:err.message||"Something went wrong, please try again later"
    }
    if(err instanceof CustomAPIError)return res.status(errorInfo.statusCode).json({message:errorInfo.msg});
    if(err.code && err.code===11000) {
        errorInfo.statusCode=StatusCodes.BAD_REQUEST;
        errorInfo.msg="The provided email is not avaliable"
    }
    res.status(errorInfo.statusCode).json({message:errorInfo.msg});
}
module.exports=errorHandler;