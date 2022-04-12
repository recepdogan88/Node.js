import { useEffect,useState } from 'react';
import './App.css';

function App() {

const [backendData,setBackendData]=useState()

 useEffect(()=>{
   getdata()
 },[])

async function getdata(){
  const response =await fetch("http://localhost:5000/api")
  const data=await response.json()
  console.log(data)
  setBackendData(data)
}
 
return (
    <div className="App">
    {backendData?.map((p,index) =>(
      <div key={index}>
        <p>{p.name}</p>
        <p>{p.surname}</p>
      </div>
    ))}
    </div>
  );
}

export default App;
