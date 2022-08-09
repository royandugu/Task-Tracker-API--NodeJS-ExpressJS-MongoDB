require("dotenv").config();

const express=require("express");
const app=express();

const connectDB=require("./Connectors/dbConnection");
const router=require("./Routers/taskRouter");

//Middlewares
app.use(express.json());
app.use("/api/V1/tasks",router);

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