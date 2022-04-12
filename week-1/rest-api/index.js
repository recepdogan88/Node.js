const express =require('express')
const app =express()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
const data=[{
    name:"recep",
    surname:"dogan"
}]

app.get("/api",(req,res)=>{
    res.json(data)
})

app.listen(5000,()=>{ console.log("server")})