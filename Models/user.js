require("dotenv").config();

const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

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
userSchema.pre("save",async function(next){
    console.log("Function entry");
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.signToken=function (){
    return jwt.sign({id:this._id,userName:this.name},process.env.JWT_SECRET,{expiresIn:'2d'}); 
}

module.exports=mongoose.model("User-Model",userSchema);