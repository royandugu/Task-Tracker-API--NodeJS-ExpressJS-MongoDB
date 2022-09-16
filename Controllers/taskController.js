const {StatusCodes}=require("http-status-codes");

const taskModel=require("../Models/taskModel");
const {getAllData,getIndvData,postData,updateData,deleteData}=require("./commonOperations");

const getTasks=async (req,res)=>{
    const {task}=req.query;
    const result=await getAllData(taskModel);
    if(task==="important"){
        const important=result.filter(index=>index.semMenu==="Important");
        res.status(StatusCodes.OK).json({tasks:important});
        return;
    }
    else if(task==="link"){
        const links=result.filter(index=>index.semMenu==="Link");
        res.status(StatusCodes.OK).json({tasks:links});
        return;
    }
    else if(task==="note"){
        const notes=result.filter(index=>index.semMenu==="Note");
        res.status(StatusCodes.OK).json({tasks:notes});
        return;
    }
    res.status(StatusCodes.OK).json({tasks:result});
}
const getIndvTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await getIndvData(taskModel,taskID);
    res.status(StatusCodes.OK).json({selectedTask:result});
}
const postTask=async (req,res)=>{
    const result=await postData(taskModel,{...req.body});
    res.status(StatusCodes.OK).json({newTask:result});
}
const updateTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await updateData(taskModel,taskID,{...req.body});
    res.status(StatusCodes.OK).json({updatedTask:result});
}
const deleteTask=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await deleteData(taskModel,taskID);
    res.status(StatusCodes.OK).json({deletedTask:result});
}
module.exports={getTasks,getIndvTask,postTask,updateTask,deleteTask};
