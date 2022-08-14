const {StatusCodes}=require("http-status-codes");

const taskModel=require("../Models/taskModel");
const BadRequestError=require("../Error_Handlers/badRequestError");

/**
 *  Options
 * commonController as a class  
 */

const commonController=(model)=>{
    const getAllTask=async (req,res)=>{
        const tasks=await taskModel.find({});
        res.status(StatusCodes.OK).json({message:"Fetch succesfull",taskList:tasks});
    }
    const getIndvTask=async (req,res)=>{
        const {id}=req.params;
        const indvTask=await taskModel.findOne({_id});
        if(!indvTask) throw new BadRequestError("The data doesn't exist");
        res.status(StatusCodes.OK).json({message:"Individaul Fetch succesfull",individualTask:indvTask});
    }
    const createTask=async (req,res)=>{
        const newData=await taskModel.create(req.body);
        res.status(StatusCodes.CREATED).json({message:"Task created",newData:newData});
    }
    const updateTask=async (req,res)=>{
        const {id}=req.params;
        const newData=await taskModel.findOneAndUpdate({_id:id},req.body,{new:true, runValidators:true});
        if(!newData) throw new BadRequestError("The data doesn't exist to update");
        res.status(StatusCodes.OK).json({message:"Update successfull",newData:newData});
    }
    const deleteTask=async (req,res)=>{
        const {id}=req.params;
        const deletedData=await taskModel.findOneAndDelete({_id:id});
        if(!deletedData) throw new BadRequestError("The data doesn't exist to delete");
        res.status(StatusCodes.OK).json({message:"Delete sucessfull",deletedData:deletedData});
    }
       
    module.exports={getAllTask,getIndvTask,createTask,updateTask,deleteTask};

}

module.exports={commonController};