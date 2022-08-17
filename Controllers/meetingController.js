const meetingModel=require("../Models/meetingModel");
const commonController=require("./commonController");
const meetingController=(req,res)=>{
    commonController(req,res,meetingModel);
}
module.exports=meetingController;