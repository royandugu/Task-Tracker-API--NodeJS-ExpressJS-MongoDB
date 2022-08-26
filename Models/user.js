const mongoose=require("mongoose");

/** 
 * Hashing of password
 * Regular expressions for email
*/
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
module.exports=userSchema;