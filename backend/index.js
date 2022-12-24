import express from "express";
import dotenv from "dotenv"
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
dotenv.config()

// connection to the db 
const connect = async ()=> {
    mongoose.set('strictQuery',false);
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("no problemo");
      } catch (error) {
        handleError(error);
      }
}


// Middle to keep track of the request path and method
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})


app.get('/', (req,res)=>{
    res.send("You're in the Root route.")
})


app.listen(process.env.PORT,()=>{
    connect();
    console.log(`backend is running on port ${process.env.PORT}`);
})