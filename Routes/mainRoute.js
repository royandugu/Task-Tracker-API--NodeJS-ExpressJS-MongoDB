const router=require("express").Router();

const {getTasks,getIndvTask,postTask,updateTask,deleteTask}=require("../Controllers/taskController");
const {getMeetings,getIndvMeeting,postMeeting,updateMeeting,deleteMeeting}=require("../Controllers/meetingController");

//Task routes
router.route("/task").get(getTasks).post(postTask);
router.route("/task/:id").get(getIndvTask).patch(updateTask).delete(deleteTask);

//Meeting routes
router.route("/meeting").get(getMeetings).post(postMeeting);
router.route("/meeting/:id").get(getIndvMeeting).patch(updateMeeting).delete(deleteMeeting);

module.exports=router;