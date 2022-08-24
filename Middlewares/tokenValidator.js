//Rename this file to token verifier
const jwt=require("jsonwebtoken");
const AuthenticationError=require("../Error_Handlers/authenticationError");

const tokenChecker=()=>{
    try{
        //Verify the token created
    }
    catch(err){
        throw new AuthenticationError("The page you are trying to access is restricted");
    }
}

module.exports=tokenChecker;