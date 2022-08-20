const {StatusCodes}=require("http-status-codes");

const meetingModel=require("../Models/meetingModel");
const {getAllData,getIndvData,postData,updateData,deleteData}=require("./commonOperations");

const getMeetings=async (req,res)=>{
    const result=await getAllData(meetingModel);
    res.status(StatusCodes.OK).json({meetings:result});
}
const getIndvMeeting=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await getIndvData(meetingModel,taskID);
    res.status(StatusCodes.OK).json({selectedMeeting:result})
}
const postMeeting=async (req,res)=>{
    const result=await postData(meetingModel,{...req.body});
    res.status(StatusCodes.CREATED).json({newMeeting:result});
}
const updateMeeting=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await updateData(meetingModel,taskID,{...req.body});
    res.status(StatusCodes.OK).json({updatedMeeting:result});
}
const deleteMeeting=async (req,res)=>{
    const {id:taskID}=req.params;
    const result=await deleteData(meetingModel,taskID);
    res.status(StatusCodes.OK).json({deletedMeeting:result});
}
module.exports={getMeetings,getIndvMeeting,postMeeting,updateMeeting,deleteMeeting};
