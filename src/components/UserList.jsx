import React from 'react'
import { useNavigate } from 'react-router-dom'


export const UserList = () => {
    const navigate = useNavigate();
    const users=[
        {id:1,name:"John",address:"Kathmandu"},
        {id:2,name:"Ramesh",address:"Pokhara"},
        {id:3,name:"Ram",address:"Janakpur"},
        {id:4,name:"Sanjaya",address:"Biratnagar"}
    ]
    const handleUser=(userId,userName,userAddress)=>{
        navigate(`/${userId}/${userName}/${userAddress}`)
        
    }
  return (
    <div className="container mt-5">
<h4>User List</h4>
<ul className="user-list">
   {users.map((user)=>{
       return ( 
        <li onClick={()=> handleUser(user.id,user.name,user.address)} key={user.id}>
        {user.name}
        </li>
       )
           
   })}

</ul>
    </div>
  )
}
export default UserList