const {StatusCodes}=require("http-status-codes");

const taskModel=require("../Models/taskModel");
const {getAllData,getIndvData,postData,updateData,deleteData}=require("./commonOperations");
const BadRequestError=require("../Error_Handlers/badRequestError");

const getTasks=async (req,res)=>{
    const {task,meeting}=req.query;
    const resultPromise=getAllData(taskModel);
    if(task)resultPromise.find({SubType:task});
    if(meeting) resultPromise.find({SubType:meeting});
    const result=await resultPromise;
    res.status(StatusCodes.OK).json({tasks:result});
}
const getIndvTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await getIndvData(taskModel,{_id: taskID});
    if(!result) throw new BadRequestError("The given id doesnot exist");
    res.status(StatusCodes.OK).json({selectedTask:result});
}
const postTask=async (req,res)=>{
    const result=await postData(taskModel,{...req.body});
    res.status(StatusCodes.OK).json({newTask:result});
}
const updateTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await updateData(taskModel,taskID,{...req.body});
    if(!result) throw new BadRequestError("The given id doesnot exist");
    res.status(StatusCodes.OK).json({updatedTask:result});
}
const deleteTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await deleteData(taskModel,taskID);
    if(!result) throw new BadRequestError("The given id doesnot exist");
    res.status(StatusCodes.OK).json({deletedTask:result});
}
module.exports={getTasks,getIndvTask,postTask,updateTask,deleteTask};
