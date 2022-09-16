const getAllData=(model)=>{
    return model.find({});
}
const getIndvData=(model,id)=>{
    return model.findOne({_id:id});
}
const postData=(model,body)=>{    
    return model.create(body);
}
const updateData=(model,id,body)=>{
    return model.findOneAndUpdate({_id:id},body,{new:true,runValidators:true});
}
const deleteData=(model)=>{
    return model.findOneAndDelete({_id:id});
}
module.exports={getAllData,getIndvData,postData,updateData,deleteData};