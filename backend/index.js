import express from "express";
import dotenv from "dotenv"


const app = express();
app.use(express.json());
dotenv.config()


// Middle to keep track of the request path and method
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})


app.get('/', (req,res)=>{
    res.send("You're in the Root route.")
})


app.listen(process.env.PORT,()=>{
    console.log(`backend is running on port ${process.env.PORT}`);
})