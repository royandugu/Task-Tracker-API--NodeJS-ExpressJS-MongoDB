const taskModel=require("../Models/taskModel");
const commonController=require("./commonController");
const taskController=(req,res)=>{    
    commonController(req,res,taskModel);
}
module.exports=taskController;