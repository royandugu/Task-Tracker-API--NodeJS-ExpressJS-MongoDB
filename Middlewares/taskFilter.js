const filterTask=async (req,res,next)=>{
    /** Filter logic */
    const {Important, Notes, Links}=req.query;
    if(Important){
        //Filter important 
    }
    else if(Notes){
        //Filter notes
    }
    else if(Links){
        //Filter links
    }
    next();
}
module.exports=filterTask;