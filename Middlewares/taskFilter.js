/* 
    Make filterTask middleware be called before getRequest. If filterTask the queries contain any of such,
    then the filtering will happen else it will just pass through next and to the get function
*/

const filterTask=async (req,res,next)=>{
    const {Important, Notes, Links}=req.query;
    if(Important){

    }
    else if(Notes){
    
    }
    else if(Links){
    
    }
    else next();
}
module.exports=filterTask;