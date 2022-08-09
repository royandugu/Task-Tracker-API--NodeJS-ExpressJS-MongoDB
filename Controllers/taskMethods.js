const taskModel=require("../Models/taskModel");
const getAllTask=async (req,res)=>{
    const tasks=await taskModel.find({});
    res.status(200).json({taskList:tasks});
}
const getIndvTask=async (req,res)=>{
    // const {id}=req.params;
    // const indvTask=await taskModel.find({_id:id});
    // res.status(200).json({individualTask:indvTask});
}
const createTask=async (req,res)=>{
    
}
const updateTask=async (req,res)=>{

}
const deleteTask=async (req,res)=>{

} 

module.exports={getAllTask,getIndvTask,createTask,updateTask,deleteTask};
