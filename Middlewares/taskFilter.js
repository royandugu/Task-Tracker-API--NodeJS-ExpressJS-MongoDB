const {StatusCodes}=require("http-status-codes");

const taskModel=require("../Models/taskModel");

const filterTask=async (req,res,next)=>{
    const result=await taskModel.find({});
    const {Important, Notes, Links}=req.query;
    if(Important){
        const important=result.filter(index=>index.semMenu==="Important");
        res.status(StatusCodes.OK).json({important:important});
    }
    else if(Notes){
        const notes=result.filter(index=>index.semMenu==="Note");
        res.status(StatusCodes.OK).json({notes:notes});
    }
    else if(Links){
        const links=result.filter(index=>index.semMenu==="Link")
        res.status(StatusCodes.OK).json({links:links});
    }
    else next();
}
module.exports=filterTask;