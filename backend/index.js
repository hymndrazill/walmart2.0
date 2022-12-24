import express from "express";
import dotenv from "dotenv"


const app = express();
app.use(express.json());
dotenv.config()




app.get('/', (req,res)=>{
    res.send("You're in the Root route.")
})


app.listen(process.env.PORT,()=>{
    console.log(`backend is running on port ${process.env.PORT}`);
})