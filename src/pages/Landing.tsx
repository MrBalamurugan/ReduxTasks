import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../Redux/store'
import { addUser, updateUser } from '../Redux/slicecurd'
import Listuser from './listuser';

interface User {
    id: number;
    name: string;
    email: string;
  }

const Landing = () => {
    const [edituser, setEdituser] = useState< User | null>(null)
    const [name, setName] = useState(edituser?.name || "")
    const [email, setEmail] = useState(edituser?.email || "")
    const dispatch = useDispatch<AppDispatch>()

        // Update name and email fields when edituser changes
        useEffect(() => {
            if (edituser) {
                setName(edituser.name);
                setEmail(edituser.email);
            } else {
                setName("");
                setEmail("");
            }
        }, [edituser]);

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(edituser){
            dispatch(updateUser({id: edituser.id, name, email}))
            setEdituser(null)
        }
        else{
            dispatch(addUser({id: Date.now(), name, email}))
        }

        setName("")
        setEmail("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="container">
            <h2>{edituser ? "Edit User" : "Add User"}</h2>
            <input
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Enter Name....'
                required
            />
            <input
                type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Email....'
                required
            />
            <button>{edituser ? "Edit User" : "Add User"}</button>
        </form>
        <Listuser setEdituser={setEdituser}/>
    </div>
  )
}

export default Landing