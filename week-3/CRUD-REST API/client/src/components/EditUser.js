import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"

export default function EditUser() {

    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")

    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getUserById()
    }, []);


    async function getUserById() {
        const response = await fetch(`http://localhost:5000/user/${id}`)
        const data = await response.json()
        console.log(data)
        setname(data[0].firstName)
        setlastname(data[0].lastName)
        setemail(data[0].email)
    }

    async function updateUser(e) {
        e.preventDefault();
        let newperson = {
            name: name,
            lastname: lastname,
            email: email,
        }
        await axios.patch(`http://localhost:5000/user/${id}`, newperson)
        //setname("")
      //  setlastname("")
      //  setemail("")
        navigate("/")
        console.log(newperson)
    }

 return (
        <>
            <div className='col-3 mt-5 ms-5 me-5'>
                <div className='bg-primary fs-2 text-center text-white p-1'>EDIT PERSON</div>
                <form className='mt-4' >
                    <div className="mb-3">
                        <input type="name" value={name} className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder='Firstname' onChange={(e) => setname(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="lastname" value={lastname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Lastname' onChange={(e) => setlastname(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} className="form-control" id="exampleInputmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(e) => setemail(e.target.value)} required></input>
                    </div>
                    <button type="submit" onClick={updateUser} className="btn btn-primary mt-3" style={{ height: 50, width: 120, fontSize: 25 }}>Submit</button>
                </form>
            </div>
        </>
    )
}
