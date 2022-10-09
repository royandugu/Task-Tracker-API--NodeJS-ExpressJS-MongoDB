require("dotenv").config();

const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"You cannot leave the email field empty"]
    },
    password:{
        type:String,
        required:[true,"You cannot leave the password field empty"]
    },
    config:{
        darkMode:{
            type:Boolean,
            default:false
        }
        /** Pictures, nicknames and so on */
    },
    connections:{
        type:mongoose.Types.ObjectId,
        value:[mongoose.Types.ObjectId],
        ref:"User-Model"
    },
    tasks:{
        type: mongoose.Types.ObjectId,
        value:[mongoose.Types.ObjectId],
        ref:"Today-Task-Model"
    },
    meetings:{
        type: mongoose.Types.ObjectId,
        value: [mongoose.Types.ObjectId],
        ref:"Meeting-Model"
    }
})
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.signToken=function (){
    return jwt.sign({id:this._id,userName:this.name},process.env.JWT_SECRET,{expiresIn:'2d'}); 
}
userSchema.methods.validatePassword=function(password){
    return bcrypt.compare(password,this.password);
}

module.exports=mongoose.model("User-Model",userSchema);