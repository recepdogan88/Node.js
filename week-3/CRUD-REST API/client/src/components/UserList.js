import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

function UserList({ PersonListe, setPersonList }) {

  const navigate = useNavigate();

  async function deleteUser(Pid) {
    axios.delete(`http://localhost:5000/user/${Pid}`)
    let deleteListe = PersonListe.filter(person => person.id !== Pid)
    setPersonList(deleteListe)
  }
  return (
    <>
      <div className='col-6 mt-5 ms-5 me-5'>
        <Link to={"/add"}><button className='btn btn-primary mb-5 btn-lg '>ADD NEW</button></Link>
        <div className='bg-primary fs-2 text-center text-white p-1'>PERSON LISTESI</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {PersonListe.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.lastname}</td>
                <td>{person.email}</td>
                <td>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={() => deleteUser(person.id)}>DELETE</button>
                    <Link to={`edit/${person.id}`} class="btn btn-info" type="button" onClick={() => { navigate("/edit") }}>EDIT</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList