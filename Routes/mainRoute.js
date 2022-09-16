const router=require("express").Router();

const {getTasks,getIndvTask,postTask,updateTask,deleteTask}=require("../Controllers/taskController");
const {getMeetings,getIndvMeeting,postMeeting,updateMeeting,deleteMeeting}=require("../Controllers/meetingController");

//Task routes
router.route("/tasks").get(getTasks).post(postTask);
router.route("/tasks/:id").get(getIndvTask).patch(updateTask).delete(deleteTask);

//Meeting routes
router.route("/meetings").get(getMeetings).post(postMeeting);
router.route("/meetings/:id").get(getIndvMeeting).patch(updateMeeting).delete(deleteMeeting);

module.exports=router;