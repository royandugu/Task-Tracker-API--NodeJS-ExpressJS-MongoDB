const taskModel=require("../Models/taskModel");
const getAllTask=async (req,res)=>{
    const tasks=await taskModel.find({});
    res.status(200).json({message:"Fetch succesfull",taskList:tasks});
}
const getIndvTask=async (req,res)=>{
    const {id}=req.params;
    const indvTask=await taskModel.find({_id:id});
    res.status(200).json({message:"Individaul Fetch succesfull",individualTask:indvTask});
}
const createTask=async (req,res)=>{
    const newData=await taskModel.create(req.body);
    res.status(201).json({message:"Task created",newData:newData});
}
const updateTask=async (req,res)=>{
    const {id}=req.params;
    const newData=await taskModel.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(200).json({message:"Update successfull",newData:newData});
}
const deleteTask=async (req,res)=>{
    const {id}=req.params;
    const deletedData=await taskModel.findOneAndDelete({_id:id});
    res.status(200).json({message:"Delete sucessfull",deletedData:deletedData});
} 
module.exports={getAllTask,getIndvTask,createTask,updateTask,deleteTask};
