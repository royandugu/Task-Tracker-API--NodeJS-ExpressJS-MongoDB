const {StatusCodes}=require("http-status-codes");
const notFoundError=(req,res)=>{
    res.status(StatusCodes.NOT_FOUND).json({message:"The route you are trying to access does not exist"});
}
module.exports=notFoundError;