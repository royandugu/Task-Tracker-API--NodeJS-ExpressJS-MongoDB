require("dotenv").config();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"You cannot leave the name field empty"]
    },
    email:{
        type:String,
        required:[true,"You cannot leave the email field empty"]
    },
    password:{
        type:String,
        required:[true,"You cannot leave the password field empty"]
    }
})
userSchema.methods.signToken=(userName,email,password)=>{
    return jwt.sign({userName,email,password},PROCESS.env.JWT_SECRET,{expiresIn:'2d'}); 
}

module.exports=mongoose.model("User-Model",userSchema);