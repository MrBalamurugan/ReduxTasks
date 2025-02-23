import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store';
import { removeUser, updateUser } from '../Redux/slicecurd';

interface UserListProps {
    setEdituser: (user: User | null) => void;
  }
  
const Listuser: React.FC<UserListProps> = ({setEdituser}) => {
    const users = useSelector((state: RootState)=>state.curd.users);
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="container">
        <h2>UserLists</h2>
        {users.length === 0 ? <p>No user Data</p> : null}
        <ul>
        {users.map((user:any)=>(
            <li key={user.id}>
                {user.name} || {user.email}
                <button onClick={(()=>setEdituser(user))} className="edit-button">Update</button>
                <button onClick={()=>dispatch(removeUser(user.id))} className="delete-button">Delete</button>
            </li>
            ))}
        </ul>
   
    </div>
  )
}

export default Listuser