const getAllData=async (model)=>{
    return await model.find({});
}
const getIndvData=async (model,id)=>{
    return await model.findOne({_id:id});
}
const postData=async (model,body)=>{    
    return await model.create(body);
}
const updateData=async (model,id,body)=>{
    return await model.findOneAndUpdate({_id:id},body,{new:true,runValidators:true});
}
const deleteData=async (model)=>{
    return await model.findOneAndDelete({_id:id});
}
module.exports={getAllData,getIndvData,postData,updateData,deleteData};