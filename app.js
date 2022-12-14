require("express-async-errors");
require("dotenv").config();

const express=require("express");
const app=express();

const connectDB=require("./Connectors/dbConnection");
const mainRouter=require("./Routes/mainRoute");
const userRouter=require("./Routes/userRoute");
const notFoundError=require("./Error_Handlers/notFoundError");
const errorHandler=require("./Error_Handlers/errorHander");

//Middlewares
app.use(express.json());
app.use("/api/V1",mainRouter);
app.use("/api/V1/authorization",userRouter);
app.use(notFoundError);
app.use(errorHandler);

//start function
const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        const port=process.env.API_PORT||5000;
        app.listen(port,()=>console.log(`API is listening to port ${port}`));       
    }
    catch(err){
        console.log(err);
    }
}
start();