const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        required:[true,"Name cannot be left empty"]
    },
    MainType:{
        type:String,
        required:[true,"Main type cannot be left empty"]
    }
    
})
module.exports=mongoose.model("Meeting-Model",schema);