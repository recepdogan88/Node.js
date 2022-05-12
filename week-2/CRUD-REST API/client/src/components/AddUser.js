import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function AddUser({ PersonListe, setPersonList }) {

    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")


    const navigate = useNavigate();

    async function postData(e) {
        e.preventDefault();
        let newperson = {
            firstName: name,
            lastName: lastname,
            email: email,
        }

        await fetch('http://localhost:5000/users', {
            method: "POST",
            body: JSON.stringify(newperson),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json));
        setname("")
        setlastname("")
        setemail("")
        setPersonList([...PersonListe, newperson])
        navigate("/")
    }

    return (
        <>
            <div className='col-3 mt-5 ms-5 me-5'>
                <div className='bg-primary fs-2 text-center text-white p-1'>ADD PERSON</div>
                <form className='mt-4' onSubmit={postData}>
                    <div className="mb-3">
                        <input type="text" value={name} className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder='Firstname' onChange={(e) => setname(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={lastname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Lastname' onChange={(e) => setlastname(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} className="form-control" id="exampleInputmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(e) => setemail(e.target.value)} required></input>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" style={{ height: 50, width: 120, fontSize: 25 }}>Submit</button>
                </form>

                <button type="button" class="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

