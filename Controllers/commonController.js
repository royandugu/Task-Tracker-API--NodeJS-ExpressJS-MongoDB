const router=require("express").Router();

const commonController=(req,res,model)=>{
    const getData=(req,res,model)=>{
        console.log("Gets data");
    }
    const getIndvData=(req,res,model)=>{
        console.log("Gets individual data");
    }
    const postData=(req,res,model)=>{    
        console.log("Posts data");
    }
    const updateData=(req,res,model)=>{
        console.log("updates data");
    }
    const deleteData=(req,res,model)=>{
        console.log("deletes data");
    }
    router.route("/").get(getData).post(postData);
    router.route("/:id").get(getIndvData).patch(updateData).delete(deleteData);
}
module.exports=commonController;