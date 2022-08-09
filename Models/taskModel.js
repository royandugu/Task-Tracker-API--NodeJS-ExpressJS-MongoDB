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
    },
    SubType:{
        type:String,
        required:[true,"Sub type cannot be left empty"]
    },
    Description:{
        type:String,
        required:[true, "Description cannot be left empty"]
    }
})
module.exports=mongoose.model("Today-Task-Model",schema);