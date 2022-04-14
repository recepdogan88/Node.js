import { useEffect,useState } from 'react';
import './App.css';

function App() {

const [movies,setMovies]=useState()

 useEffect(()=>{
   getdata()
 },[])

async function getdata(){
  const response =await fetch("http://localhost:5000/api")
  const data=await response.json()
  console.log(data)
  setMovies(data)
}
async function deleteMovie(Pid){
      const baseURL=`http://localhost:3001/movies/${Pid}`
      await fetch(baseURL,{
          method:"DELETE"
      })
      setMovies(movies.filter(mov =>mov.id!==Pid))
   }
 
return (
    <div className="App">
      <div className='row'>
        
        {movies?.map(movie =>(
      <div className='col-lg-3 m-3'key={movie.id}>
        <div className="card mb-4 shadow-sm" >
          <img src={movie.imageURL} className="card-img-top picture" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <button onClick={()=> deleteMovie(movie.id)} type='button' className='btn btn-md btn-outline-danger'>DELETE</button>
                <h2><span className='badge bg-info'>{movie.rating}</span></h2>
              </div>
          </div>
          </div>
       </div>
     ))}
       
      </div>
    </div>
  );
}

export default App;
