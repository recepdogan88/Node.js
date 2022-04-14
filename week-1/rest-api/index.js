const express =require('express')
const app =express()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(express.json())


app.get("/api",(req,res)=>{
    res.json(data)
})

app.get("/api/movies/:id",(req,res)=>{
 const movie= data.find(m =>m.id===parseInt(req.params.id))
 if(!movie) res.status(404).send("not found")
 res.send(movie)
})

app.post("/api",(req,res)=>{
  const newpost={
    id:movies.length+1,
    name:req.body.name
  }
  movies.push(newpost)
})

app.delete("/api/movies/:id",(req,res)=>{
  const movie= data.filter(m =>m.id===parseInt(req.params.id))
  res.send(movie)
 })

app.listen(5000,()=>{ console.log("server")})

const data = [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL: "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },
      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL: "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      },
      {
        id: 3,
        name: "Arrow",
        rating: 7.9,
        overview: "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL: "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      },
      
    ]
  