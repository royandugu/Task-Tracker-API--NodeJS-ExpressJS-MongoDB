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
    Date:{
        type:Date,
        required:[true,"Deadline must be provided"]
    },
    Time:{
        type:String,
        required:[true, "Time must be provided"]
    },
    Description:{
        type:String,
        required:[true,"Meeting description required"]
    }
    
})
module.exports=mongoose.model("Meeting-Model",schema);