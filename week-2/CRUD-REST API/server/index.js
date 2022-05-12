import express  from "express";
import bodyParser from "body-parser"
import cors from "cors"
import userRoutes from "./routes/users.js"

const app=express()
const port=5000

const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(cors())
app.use("/",userRoutes)
app.all("*",(req,res)=> res.send("that is not exist"))

app.get("/",(req,res)=>res.send(users))

app.listen(port,() => console.log("server okey"))