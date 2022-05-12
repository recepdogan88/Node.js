import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditUser from './components/EditUser';

function App() {

  const [PersonListe, setPersonList] = useState([])

  useEffect(() => {
    getdata()
  }, [PersonListe]);

  async function getdata() {
    const response = await fetch('http://localhost:5000/users')
    const data = await response.json()
    setPersonList(data)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList
          PersonListe={PersonListe}
          setPersonList={setPersonList}
        />} />
        <Route path="/edit/:id" element={<EditUser
          PersonListe={PersonListe}
          setPersonList={setPersonList}
        />} />
        <Route path="/add" element={<AddUser
          PersonListe={PersonListe}
          setPersonList={setPersonList}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
