import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders]= useState([]);
    useEffect(()=>{
        if(user){
            fetch(`https://gentle-hamlet-86123.herokuapp.com/purchase?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
    },[user])

    const orderCancle=(id)=>{
        const proced = window.confirm('are you sure cancle order')
        if(proced){
            const url = `https://gentle-hamlet-86123.herokuapp.com/purchase/${id}`
            fetch(url,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const remainder = orders.filter(order=> order._id !== id) 
                setOrders(remainder);
            })
        }
      
    }
    return (
        <div className='container mx-auto'>
            <h2 className=" text-center text-2xl py-5 text-orange-500 font-bold">My Order</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th>No</th>
                    <th>Product name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>payment</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody >
               
                 {
                    orders.map((order, index) =>
                     <tr className='' key={index}>
                        <th>{index +1}</th>
                        <td>{order?.productName}</td>
                        <td>{order?.email}</td>
                        <td>Pending...</td>
                        <td><Link to='/payment'><button className='btn btn-sm'>Payment</button></Link></td>
                        <td><button onClick={()=>orderCancle(order?._id)} className='btn btn-sm'>Cancle Order</button></td>
                    </tr> )
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrder;