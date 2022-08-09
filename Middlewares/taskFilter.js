const filterTask=async (req,res,next)=>{
    /** Filter logic */
    console.log("I have been called");
    next();
}
module.exports=filterTask;