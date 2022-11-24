import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const MakeAdmin = () => {
const [users, setUsers]=useState([])


useEffect(()=>{
    fetch('https://gentle-hamlet-86123.herokuapp.com/users')
    .then(res=> res.json())
    .then(data =>{
        // console.log(data)
        setUsers(data)
    })
},[users])

const makeAdmin=(email)=>{
    fetch(`https://gentle-hamlet-86123.herokuapp.com/user/admin/${email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        }  
    })
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        toast.success('successfully made an admin')
    })

}

const deleteUser=(id)=>{
    const proced = window.confirm('are you sure user DELETE')
    if(proced){
        fetch(`https://gentle-hamlet-86123.herokuapp.com/users/${id}`,{
        method: "DELETE",
    })
    .then(res=>res.json())
    .then(data =>{
        const remaider= users.filter(a => a._id !== id)
        setUsers(remaider)
    })
    } 
}

    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No</th>
        <th>Email</th>
        <th>Make admin</th>
        <th>Delete user</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          users.map((user, index)=>   <tr>
          <th>{index +1}</th>
          <td>{user?.email}</td>
          <td>{
              user?.role !=="admin" && <button onClick={()=>makeAdmin(user?.email)} className="btn btn-sm">Make admin</button>
              }</td>
          <td><button onClick={()=>deleteUser(user?._id)} className="btn btn-sm">Delete user</button></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};


export default MakeAdmin;

