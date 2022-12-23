import express from "express"

const app = express();

const PORT = 8800 || null

app.listen(PORT,()=>{
    console.log(`backend is running on port ${PORT}`);
})